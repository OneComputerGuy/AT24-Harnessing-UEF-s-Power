import { createSession } from '@/actions/dbHandler';
import { v4 as uuidv4 } from 'uuid';

export const GET = (request) => {
  const state = uuidv4();
  const nonce = uuidv4();
  const clientId = request.nextUrl.searchParams.get('client_id');
  const redirectURL = request.nextUrl.searchParams.get('target_link_uri');

  const sessionPayload = {
    state,
    nonce,
    is_valid: 1,
    server: '',
    user_id: '',
    names: '',
    one_time_session_token: '',
    launch_data: '',
    api_token: '',
  };

  createSession(sessionPayload);

  return Response.redirect(`${process.env.OIDC_AUTH}?response_type=id_token&scope=openid&login_hint=${request.nextUrl.searchParams.get('login_hint')}&lti_message_hint=${request.nextUrl.searchParams.get('lti_message_hint')}&state=${state}&redirect_uri=${encodeURIComponent(redirectURL)}&client_id=${clientId}&nonce=${nonce}
`);
};
