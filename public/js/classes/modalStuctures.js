export const renderLogoutModal = (tunnel) => {
  tunnel.postMessage({
    type: 'portal:modal',
    modalId: 'logout-modal',
    contents: {
      tag: 'Modal',
      props: {
        width: 'small',
      },
      children: [
        {
          tag: 'ModalHeader',
          props: {
            title: 'Are you sure you want to logout? ',
          },
        },
        {
          tag: 'ModalBody',
          children: [
            {
              tag: 'div',
              children: 'Make sure you really want to log out...',
            },
          ],
        },
        {
          tag: 'ModalFooter',
        },
      ],
    },
  });
};

export const renderCourseModal = (tunnel) => {
  tunnel.postMessage({
    type: 'portal:modal',
    modalId: 'course-modal',
    contents: {
      tag: 'Modal',
      props: {
        width: 'large',
      },
      children: [
        {
          tag: 'ModalHeader',
          props: {
            title: 'New course materials available!',
          },
        },
        {
          tag: 'ModalBody',
          children: [
            {
              tag: 'iframe',
              props: {
                src: 'https://notlocalhost.ngrok.dev/uef/content/modal?src=course',
                style: {
                  flex: '1 1 auto',
                  width: '100%',
                  height: '35rem',
                  backgroundColor: '#fff',
                  border: 'none',
                },
              },
            },
          ],
        },
        {
          tag: 'ModalFooter',
          children: 'footer',
        },
      ],
    },
  });
};

export const renderGradesModal = (tunnel) => {
  tunnel.postMessage({
    type: 'portal:modal',
    modalId: 'grades-modal',
    contents: {
      tag: 'Modal',
      props: {
        width: 'medium',
      },
      children: [
        {
          tag: 'ModalHeader',
          props: {
            title: 'Remember about your grades!',
          },
        },
        {
          tag: 'ModalBody',
          children: [
            {
              tag: 'iframe',
              props: {
                src: 'https://notlocalhost.ngrok.dev/uef/content/modal?src=grades',
                style: {
                  flex: '1 1 auto',
                  width: '100%',
                  height: '11rem',
                  backgroundColor: '#fff',
                  border: 'none',
                },
              },
            },
          ],
        },
        {
          tag: 'ModalFooter',
          children: 'footer',
        },
      ],
    },
  });
};
