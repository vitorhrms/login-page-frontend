export const theme = {
  colors: {
    danger: "#DA0812",
    info: "#5B6293",
    warning: "#FAE022",
    success: "#6DB3A7",
    background: "#F7F8FC",
    primary: "#DA0812",
    secondary: "#C8D2D8",
    white: "#FFFFFF",
    black: "#000000",
    grayDark: "#252733",
    gray: "#464650",
    grayLight: "#9FA2B4",
    modalShadow: "rgba(0, 0, 0, 0.25)",
    buttonShadow: "rgba(165, 163, 174, 0.3)",
    loadingBg: "rgba(0, 0, 0, 0.25)",
    paginationActive: "#DA0812",
    paginationHover: "#EEEEEE",
    paginationArrow: "#9FA2B4",
    paginationArrowDisabled: "#C8C8C8",
    grayDarker: "#34454E",
    graphRed: "#DA0812",
    graphYellow: "#FAE022",
    graphLightblue: "#76D1F5",
    graphGreen: "#6DB3A7",
    graphMediumblue: "#5B6293",
    graphDarkblue: "#233741",
    graphGray: "#464650",
    fontGray: "#464650",
    cardColor: "#FFFFFF",
    errorRed: "#DA0812",
    grayBorder: "#d9d9d9",
    loadingOverlay: "#00000080",
    green: "#6DB3A7",
    disabledColor: "#a5a3ae4d",
  },
  fonts: {
    main: "'Roboto', sans-serif",
    heading: "'Montserrat', sans-serif",
    weight: {
      thin: 100,
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    size: {
      xs: "10px",
      sm: "12px",
      md: "14px",
      lg: "16px",
      xl: "18px",
      xxl: "20px",
      x2l: "22px",
      x3l: "24px",
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "32px",
  },
  modal: {
    width: {
      sm: "300px",
      md: "590px",
      lg: "980px",
    },
  },
  borderRadius: "6px",
  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.12)",
  breakpoints: {
    mobile: "640px", // sm
    tablet: "768px", // md
    laptop: "1024px", // lg
    desktop: "1280px", // xl
    widescreen: "1536px", // 2xl
    ultrawide: "1920px", // 3xl
  },
  media: {
    sm: `(min-width: '640px')`,
    md: `(min-width: '768px')`,
    lg: `(min-width: '1024px')`,
    xl: `(min-width: '1280px')`,
    "2xl": `(min-width: '1536px')`,
    "3xl": `(min-width: '1920px')`,
  },
} as const;

export type AppTheme = typeof theme;
