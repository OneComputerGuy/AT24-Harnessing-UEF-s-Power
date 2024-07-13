'use strict';

// Imports from other JS files - Broken into silos for better readability
import MessageHandler from './classes/MessageHandler.js';
import globalHandlersRegistration from './classes/globalHandlers.js';
import mailman from './classes/mailman.js';

/// Checks if the page was loaded within the Ultra frame
if (!window.parent) {
  throw new Error('Unable to load UEF integration, not within an Ultra panel');
}

// Gets the status information from the page contents so we can use it on the UEF requests
const apiToken = document.getElementById('api_token').textContent || '';
const learnServer =
  document.getElementById('server').textContent || 'https://blackboard.com';
// const userId = document.getElementById('user_id').textContent || '';

let messageTunnel;
//*************************************************************************************************************************

// Creates the listener for the initial authentication message to UEF
addEventListener('message', (message) => {
  // Validates if the origin of the message is indeed the learn server you're expecting
  if (message.origin !== learnServer.substring(0, learnServer.length - 1))
    return;
  // Checks if the message received is an integration hello, if so, we save the message tunnel for comms.
  // IMPORTANT: UEF uses messageChannel as the communication protocol and not messages directly in the frame which can be read by any page.
  // More information about messageChannel: https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel/MessageChannel
  if (message.data.type === 'integration:hello') {
    // When the integration responds to the registration process, it sends a port for messaging. Saving that to a variable helps the communication
    messageTunnel = new MessageHandler(message.ports[0]);

    // This adds a custom function that will parse any incoming Ultra message after its registration
    messageTunnel.messageParser = (ultraMessage) => {
      if (ultraMessage.data.type === 'authorization:authorize') {
        // Registration of global handlers:
        globalHandlersRegistration(messageTunnel);

        // Sends the request to subscribe to events
        messageTunnel.postMessage({
          type: 'event:subscribe',
          subscriptions: [
            'click',
            'hover',
            'route',
            'portal:new',
            'portal:remove',
            'lti:launch',
          ],
        });
      } else {
        // Routes message to message router if the message is not an authentication request
        mailman(ultraMessage, messageTunnel);
      }
    };

    // Sends the user oAuth token to be able to properly work with UEF and render information based on the user's roles
    messageTunnel.postMessage({
      type: 'authorization:authorize',
      token: apiToken,
    });
  }
});

// Initiates the registration process of the integration with Learn
window.parent.postMessage({ type: 'integration:hello' }, `${learnServer}/*`);
