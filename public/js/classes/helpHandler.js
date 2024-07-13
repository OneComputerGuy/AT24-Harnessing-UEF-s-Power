const registerHelper = (tunnel, id, name, icon) => {
  console.log(`Creating help registry for ${name}`);
  tunnel.postMessage({
    type: 'help:register',
    id,
    displayName: name,
    providerType: 'primary',
    iconUrl: icon,
  });
};

export const registerHelpProviders = (tunnel) => {
  // Helper IDs are: 'help.it.issue' and 'help.school.resources'
  // registerHelper(
  // tunnel,
  // 'help-it-issue',
  // 'College IT support',
  // 'https://notlocalhost.ngrok.dev/assets/technical-support.ico',
  // );
  registerHelper(
    tunnel,
    'helpschoolresources',
    'School resources',
    'https://notlocalhost.ngrok.dev/assets/library.svg',
  );
};

export const helpHandler = (message, tunnel) => {
  if (message.data.eventType === 'help:request') {
    tunnel.postMessage({
      type: 'help:request:response',
      correlationId: message.data.correlationId,
    });

    setTimeout(() => {
      tunnel.postMessage({
        type: 'portal:panel',
        correlationId: 'help-panel-institution',
        panelType: 'small',
        panelTitle: 'School Resources',
      });
    }, 350);
  }

  if (
    message.data.type === 'portal:panel:response' &&
    message.data.correlationId === 'help-panel-institution'
  ) {
    tunnel.postMessage({
      type: 'portal:render',
      portalId: message.data.portalId,
      contents: {
        tag: 'iframe',
        props: {
          src: 'https://notlocalhost.ngrok.dev/uef/content/help',
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
  }
};
