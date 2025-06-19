import { courseHandler } from './courseHelper.js';
import { helpHandler } from './helpHandler.js';
import { modalHandler } from './modalHelper.js';

const mailman = (message, tunnel) => {
  // Help handlers
  helpHandler(message, tunnel);
  courseHandler(message, tunnel);
  modalHandler(message, tunnel);
};

export default mailman;
