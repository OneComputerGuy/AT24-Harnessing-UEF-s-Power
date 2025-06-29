import 'dotenv/config';
import { getSpecificSession } from '@/actions/dbHandler';
import Script from 'next/script';

const LandingPage = ({ searchParams }) => {
  console.log(process.env.APP_DOMAIN);
  const sessionDetails = getSpecificSession(searchParams.state);
  return (
    <div>
      <span id="api_token">
        {!sessionDetails
          ? ''
          : JSON.parse(sessionDetails.api_token).access_token}
      </span>
      <span id="server">{!sessionDetails ? '' : sessionDetails.server}</span>
      <span id="app_domain">{process.env.APP_DOMAIN || 'blackboard.com'}</span>
      <span id="user_id">{!sessionDetails ? '' : sessionDetails.user_id}</span>
      <span id="names">{!sessionDetails ? '' : sessionDetails.names}</span>
      <p>Woot</p>
      <Script src="/js/entry.js" type="module" />
    </div>
  );
};

export default LandingPage;
