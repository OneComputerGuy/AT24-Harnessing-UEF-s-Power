// Helper Functions
import {
  renderCourseMenuDropdown,
  renderCourseMenuSimple,
} from './courseMenuStructures.js';

export const renderCourseContent = (portalId, frameSource, tunnel) => {
  tunnel.postMessage({
    type: 'portal:render',
    portalId: portalId,
    contents: {
      tag: 'iframe',
      props: {
        src: frameSource,
        style: {
          flex: '1 1 auto',
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          border: 'none',
        },
      },
    },
  });
};

// Main Code

export const courseHandler = (message, tunnel) => {
  // This checks if the user was routed to an Ultra course
  if (
    message.data.eventType === 'route' &&
    message.data.routeName.includes('peek.course.outline')
  ) {
    // This checks what to do based on the course ID

    // Course _5_1 will show a course evaluation
    if (message.data.routeData.courseId === '_5_1') {
      // As a good practice, we introduce a 2 second delay before loading the panel
      // This is to ensure the course has loaded correctly before showing any other information to the user.
      setTimeout(() => {
        tunnel.postMessage({
          type: 'portal:panel',
          correlationId: 'evaluation-panel',
          // panelType: 'full',
          panelType: 'small',
          panelTitle: 'Course evaluation survey!',
        });
      }, 2000);
    }
  }

  // These is the code that will render the panels
  // If the message received is of the registration of the menu item, we render the link/links
  if (
    message.data.eventType === 'portal:new' &&
    message.data.selector === 'course.outline.details' &&
    message.data.selectorData.registrationName === 'Course Links'
  ) {
    renderCourseMenuSimple;
    // renderCourseMenuDropdown(message.data.portalId, '', tunnel); // Renders a course details dropdown menu
    renderCourseMenuSimple(message.data.portalId, '', tunnel); // Renders a simple course detail link
  }

  // If the message received has a type "portal:callback" it means an item we created was created
  // We will need to react to it by requesting a panel and then rendering.
  if (
    message.data.type === 'portal:callback' &&
    message.data.event === 'onClick'
  ) {
    // the callbackId "simple-menu-click" indicates that the link item we created under the course menu was clicked
    if (message.data.callbackId === 'simple-menu-click') {
      tunnel.postMessage({
        type: 'portal:panel',
        correlationId: 'simple-menu-panel',
        panelType: 'full',
        panelTitle: 'Library Assets',
      });
    }

    // course-menu-it-resources and course-menu-academic-resources are the callbackIds for the dropdown menu
    if (message.data.callbackId === 'course-menu-it-resources') {
      tunnel.postMessage({
        type: 'portal:panel',
        correlationId: 'course-menu-it-resources',
        panelType: 'small',
        panelTitle: 'Have an issue?',
      });
    }

    if (message.data.callbackId === 'course-menu-academic-resources') {
      tunnel.postMessage({
        type: 'portal:panel',
        correlationId: 'course-menu-academic-resources',
        panelType: 'full',
        panelTitle: 'DevCon College Resources',
      });
    }
  }

  // This renders an evaluation panel when the correlationId is "evaluation-panel"
  if (
    message.data.type === 'portal:panel:response' &&
    message.data.status === 'success'
  ) {
    if (message.data.correlationId === 'evaluation-panel') {
      renderCourseContent(
        message.data.portalId,
        'https://notlocalhost.ngrok.dev/uef/content/evaluation',
        tunnel,
      );
    }

    if (message.data.correlationId === 'simple-menu-panel') {
      renderCourseContent(
        message.data.portalId,
        'https://notlocalhost.ngrok.dev/uef/content/library',
        tunnel,
      );
    }

    if (message.data.correlationId === 'course-menu-it-resources') {
      renderCourseContent(
        message.data.portalId,
        'https://notlocalhost.ngrok.dev/uef/content/help',
        tunnel,
      );
    }

    if (message.data.correlationId === 'course-menu-academic-resources') {
      renderCourseContent(
        message.data.portalId,
        'https://notlocalhost.ngrok.dev/uef/content/library',
        tunnel,
      );
    }
  }

  // This code keeps checking if a new panel was created with the ID "course.banner.top" which only happens when opening a course
  // If so, it uses its ID to render the top banner within the course
  if (
    message.data.eventType === 'portal:new' &&
    message.data.selector === 'course.banner.top'
  ) {
    renderCourseContent(
      message.data.portalId,
      'https://notlocalhost.ngrok.dev/uef/content/banner',
      tunnel,
    );
  }
};
