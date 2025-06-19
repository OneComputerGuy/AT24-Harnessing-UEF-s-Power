/* eslint-disable no-console */
class MessageHandler {
  messageParser = () => true;

  constructor(tunnel) {
    this.messageHandler = tunnel;
    this.messageHandler.onmessage = this.onMessage;
  }

  onMessage = (incomingData) => {
    console.log(`[Message From Ultra]: `, incomingData.data);
    this.messageParser(incomingData);
  };

  postMessage = (payload) => {
    console.log(`[Message to Ultra]:`, payload);
    this.messageHandler.postMessage(payload);
  };
}

export default MessageHandler;
