const theme = {
  colors: {
    body: "#ffffff",
    text: "#121212",
    input: "#ebebeb",
    inputText: "#555555",
    buttons: "#f575a1",
    footer: "#f7d1de",
    hover: "#d85087",
    active: "#b83d6e",
    hoverButtons: "#D85087",
    hoverHeaderIcon: "#fff0f5",
    borderCards: "#ffeb98",
    accentBlue: " #cddafa",
    borderInput: "#9a9a9a",
  },
  spacing: value => `${4 * value}px`,
  fonts: {
    primary: "Nunito, sans-serif",
    secondary: "Mulish, sans-serif",
  },
  fontSizes: {
    xxs: "14px",
    xs: "16px",
    s: "18px",
    m: "20px",
    ml: "24px",
    l: "32px",
    xl: "36px",
    xxl: "48px",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.4,
    mediumTitle: 1.3,
    largeTitle: 1.2,
  },
  borders: {
    none: "none",
    normal: "1px solid",
  },
  radii: {
    none: "0",
    text: "4px",
    input: "8px",
    button: "12px",
    cards: "16px",
  },
  shadows: {
    primary: "2px 4px 16px 0px rgba(115, 115, 115, 0.20)",
  },
  transitions: {
    primary: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export default theme;
