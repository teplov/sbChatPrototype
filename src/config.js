const isMobileDevice = () => !!/Mobi/.test(navigator.userAgent);

const config = {
  theme: 'site',
  displaySize: !!isMobileDevice() ? 'sd' : 'md' // ld: Desktop (large), md: Tablet (medium), sd: Mobile (small)
};

export { config };
