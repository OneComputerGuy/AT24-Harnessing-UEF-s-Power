import { updateSessionData } from '@/actions/dbHandler';
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');

export const POST = async (req) => {
  // TODO: Redirect for REST API token request

  const launchData = await req.formData();
  const launchParts = launchData.get('id_token').split('.');

  const header = JSON.parse(Buffer.from(launchParts[0], 'base64').toString());

  const devKeyRaw = await fetch(process.env.PUBLIC_KEYSET);
  const devKeys = await devKeyRaw.json();

  const signingKey = devKeys.keys.find((key) => {
    if (key.kid === header.kid) return key;
  });

  if (!jwt.verify(launchData.get('id_token'), jwkToPem(signingKey)))
    Response.redirect('/uef/error?error=jwt-sign-key');

  const body = JSON.parse(Buffer.from(launchParts[1], 'base64').toString());

  updateSessionData({
    state: launchData.get('state'),
    server: body['https://purl.imsglobal.org/spec/lti/claim/tool_platform'].url,
    user_id: body.sub,
    names: body.name,
    is_valid: 0,
    one_time_session_token:
      body['https://blackboard.com/lti/claim/one_time_session_token'],
    launch_data: JSON.stringify(body),
    api_token: '',
  });

  return Response.redirect(
    `${body['https://purl.imsglobal.org/spec/lti/claim/tool_platform'].url}/learn/api/public/v1/oauth2/authorizationcode?redirect_uri=${encodeURIComponent('https://notlocalhost.ngrok.dev/lti/tlo')}&response_type=code&one_time_session_token=${body['https://blackboard.com/lti/claim/one_time_session_token']}&client_id=${process.env.APP_KEY}&scope=*&state=${launchData.get('state')}`,
  );
};
