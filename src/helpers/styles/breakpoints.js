export const size = {
  mobile: '320px',
  maxMobile: '767px',
  minTablet: '768px',
  maxTablet: '1271px',
  desktop: '1304px',
};

 const breakpoints = {
  mobile: `(min-width: ${size.mobile})`,
  maxMobile: `(max-width: ${size.maxMobile})`,

  tablet: `(min-width: ${size.minTablet}) and (max-width: ${size.maxTablet})`,
  minTablet: `(min-width: ${size.minTablet})`,
  maxTablet: `(max-width: ${size.maxTablet})`,

  desktop: `(min-width: ${size.desktop})`,
 };
export default breakpoints;