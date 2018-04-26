const isMobileDevice = () => !!/Mobi/.test(navigator.userAgent);

const config = {
  theme: "sbol",
  displaySize: !!isMobileDevice() ? "sd" : "md" // ld: Desktop (large), md: Tablet (medium), sd: Mobile (small)
};

export { config };
