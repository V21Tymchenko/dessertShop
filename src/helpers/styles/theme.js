const theme = {
  colors: {
    body: "#ffffff",
    text: "#121212",
    input: "#ebebeb",
    inputText: "#555555",
    buttons: "#f575a1",
    footer: "#f7d1de",
    accentPink: "#f7d1de",
    accentYellow: "#ffeb98",
    accentGreen: "#bff3ee",
    accentBlue: "#cddafa",
    hoverButtons: "#D85087",
    hoverHeaderIcon: "#fff0f5",
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
};

export default theme;
