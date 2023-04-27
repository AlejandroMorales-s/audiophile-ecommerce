export const getDeviceType = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(
    userAgent
  );
  const isTablet =
    /ipad|android/i.test(userAgent) && !/mobile/i.test(userAgent);
  return isTablet ? "tablet" : isMobile ? "mobile" : "desktop";
};
