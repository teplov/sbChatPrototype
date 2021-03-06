const isMobileDevice = () => !!/Mobi/.test(navigator.userAgent);

const config = {
  theme: 'sbol',
  avatar:
    'https://uploads.codesandbox.io/uploads/user/2f6a626d-8b4a-4683-82bc-ba64a08d312f/Mfd5-avatar.jpg',
  displaySize: !!isMobileDevice() ? 'sd' : 'md', // ld: Desktop (large), md: Tablet (medium), sd: Mobile (small)
  inputMaxHeight: 90,
  site: {
    headerTitle: 'Чат со Сбербанком',
    primaryColor: 'black',
    secondaryColor: '#eee',
    hoverColor: 'green',
    disabledColor: '#ccc',
    sendButtonSign: 'sendArrow',
    sendButtonSize: 20
  },
  sbol: {
    headerTitle: 'Сберчат',
    primaryColor: 'green',
    secondaryColor: '#eee',
    hoverColor: 'green',
    disabledColor: '#ccc',
    sendButtonSign: 'sendArrow2',
    sendButtonSize: 18
  }
};

export { config };
