import {
  renderCourseModal,
  renderGradesModal,
  renderLogoutModal,
} from './modalStuctures.js';

export const modalHandler = (message, tunnel) => {
  if (
    message.data.type === 'event:event' &&
    message.data.eventType === 'hover' &&
    message.data.analyticsId === 'logout.base.navigation.handleBase.link'
  ) {
    renderLogoutModal(tunnel);
  }

  if (message.data.eventType === 'route') {
    if (
      message.data.routeName.includes('peek.course.outline') &&
      message.data.routeData.courseId === '_3_1'
    ) {
      setTimeout(() => {
        renderCourseModal(tunnel);
      }, 2000);
    }
    if (message.data.routeName === 'base.grades') {
      setTimeout(() => {
        renderGradesModal(tunnel);
      }, 2000);
    }
  }
};
