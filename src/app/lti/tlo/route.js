import { getSpecificSession, updateSessionData } from '@/actions/dbHandler';

export const GET = async (req) => {
  const sessionData = getSpecificSession(req.nextUrl.searchParams.get('state'));

  const formPayload = new URLSearchParams({ grant_type: 'authorization_code' });

  const baseRedirectUrl = `https://${process.env.APP_DOMAIN}/lti/tlo`;

  const tokenRequest = await fetch(
    `${sessionData.server}/learn/api/public/v1/oauth2/token?code=${req.nextUrl.searchParams.get('code')}&redirect_uri=${encodeURIComponent(baseRedirectUrl)}`,
    {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(process.env.APP_KEY + ':' + process.env.SECRET).toString(
            'base64',
          ),
      },
      body: formPayload,
    },
  );

  updateSessionData({
    ...sessionData,
    api_token: JSON.stringify(await tokenRequest.json()),
  });

  return Response.redirect(
    `https://${process.env.APP_DOMAIN}/uef/launch?state=${req.nextUrl.searchParams.get('state')}`,
  );
};
