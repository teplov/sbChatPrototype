const isMobileDevice = () => !!/Mobi/.test(navigator.userAgent);

const config = {
  theme: 'sbol',
  avatar:
    'https://uploads.codesandbox.io/uploads/user/2f6a626d-8b4a-4683-82bc-ba64a08d312f/Mfd5-avatar.jpg',
  displaySize: !!isMobileDevice() ? 'sd' : 'md', // ld: Desktop (large), md: Tablet (medium), sd: Mobile (small)
  site: {
    primaryColor: 'black',
    secondaryColor: '#eee',
    hoverColor: 'green',
    disabledColor: '#ccc',
    sendButtonSign: 'sendArrow',
    sendButtonSize: 20
  },
  sbol: {
    primaryColor: 'green',
    secondaryColor: '#eee',
    hoverColor: 'green',
    disabledColor: '#ccc',
    sendButtonSign: 'sendRound',
    sendButtonSize: 30
  }
};

export { config };
