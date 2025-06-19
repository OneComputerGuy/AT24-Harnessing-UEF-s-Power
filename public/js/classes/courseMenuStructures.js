import { applicationDomain } from '../entry.js';

export const renderCourseMenuSimple = (portalId, _, tunnel) => {
  tunnel.postMessage({
    type: 'portal:render',
    portalId,
    contents: {
      tag: 'div',
      props: {
        className: 'uef--course-details--element-card',
        onClick: {
          callbackId: 'simple-menu-click',
        },
      },
      children: [
        {
          tag: 'div',
          props: {
            className: 'uef--course-details--image',
          },
          children: [
            {
              tag: 'img',
              props: {
                alt: 'Icon for the UEF integration menu',
                src: `https://uef.ngrok.io/assets/book.png`,
                height: 24,
                width: 24,
              },
            },
          ],
        },
        {
          tag: 'div',
          props: {
            className: 'uef--course-details--element',
          },
          children: [
            {
              tag: 'div',
              props: {
                className: 'uef--course-details--name',
              },
              children: 'School Library',
            },
            {
              tag: 'div',
              props: {
                className: 'uef--course-details--content',
              },
              children: [
                {
                  tag: 'div',
                  props: {
                    className: 'uef--course-details--link',
                  },
                  children: 'Search for books in the library database',
                },
              ],
            },
          ],
        },
      ],
    },
  });
};

export const renderCourseMenuDropdown = (portalId, _, tunnel) => {
  tunnel.postMessage({
    type: 'portal:render',
    portalId,
    contents: {
      tag: 'div',
      props: {
        className: 'uef--course-details--element-card',
      },
      children: [
        {
          tag: 'div',
          props: {
            className: 'uef--course-details--image',
          },
          children: [
            {
              tag: 'img',
              props: {
                alt: '',
                src: `https://${applicationDomain}/assets/book.png`,
                height: 24,
                width: 24,
              },
            },
          ],
        },
        {
          tag: 'div',
          props: {
            className: 'uef--course-details--element',
          },
          children: [
            {
              tag: 'div',
              props: {
                className: 'uef--course-details--name',
              },
              children: 'Institution Resources',
            },
            {
              tag: 'div',
              children: [
                {
                  tag: 'ActionMenu',
                  props: {
                    items: [
                      {
                        name: 'Need help?',
                        callbackId: 'course-menu-it-resources',
                      },
                      {
                        name: 'School Library',
                        callbackId: 'course-menu-academic-resources',
                      },
                    ],
                    label: 'Find here information about the institution',
                    className: 'uef--action-menu--labeled',
                    labelClassName: 'uef--course-details--menu-label',
                  },
                },
              ],
              props: {
                className: 'uef--course-details--menu-container',
              },
            },
          ],
        },
      ],
    },
  });
};
