import { applicationDomain } from '../entry.js';

import { registerHelpProviders } from './helpHandler.js';

const globalHandlersRegistration = (tunnel) => {
  // Help Providers:
  registerHelpProviders(tunnel); // Once the integration is authorized, you can register for any service, in this case, help providers.

  // This code adds a navigation option in the landing page (between Grades and Tools) however, there's no workflow to render information on the panel that opens.
  // If any workflow is added in the future, the code will be updated to reflect that.

  // tunnel.postMessage({
  //   type: 'basenav:register',
  //   displayName: 'Library System',
  //   routeName: 'local-library',
  //   initialContents: {
  //     tag: 'Link',
  //     to: 'local-library',
  //     children: [
  //       {
  //         tag: 'div',
  //         children: [
  //           {
  //             tag: 'img',
  //             props: {
  //               src: `https://${applicationDomain}/assets/library.svg`,
  //               height: 24,
  //               width: 24,
  //             },
  //           },
  //           {
  //             tag: 'span',
  //             children: 'Library System',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // });

  // Course Links providers:
  tunnel.postMessage({
    type: 'course:detail:register',
    registrationName: 'Course Links',
  });
};

export default globalHandlersRegistration;
