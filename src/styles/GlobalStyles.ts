import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
  body {
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  svg {
    shape-rendering: geometricPrecision;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
    
  * {
    text-decoration: none;
    box-sizing: border-box;
    list-style: none;
    border: none;
    padding: 0;
    margin: 0;

    --rt-color-dark: ${({ theme }) => theme.colors.grayLight};
  }
  
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }

  span.tooltip-warning-span {
    color: ${({ theme }) => theme.colors.danger};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fonts.size.md};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  .claranet-tooltip {
    font-size: ${({ theme }) => theme.fonts.size.sm} !important;
    font-family: ${({ theme }) => theme.fonts.main} !important;
    font-weight: ${({ theme }) => theme.fonts.weight.regular} !important;
    color: ${({ theme }) => theme.colors.grayLight};
  }

  #App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  ::-webkit-scrollbar-button {
    height: 0 !important;
    width: 0 !important;
  }

  ::-webkit-scrollbar-thumb {
    background: #dadada !important;
    border: 8px #fff !important;
    border-radius: 10px !important;
  }

  ::-webkit-scrollbar-corner {
    background: transparent !important;
  }
  
  ::-webkit-scrollbar-track {
    background: #e9e9e9 !important;
    border: 9px #fff !important;
    border-radius: 10px !important;
    margin: 6px 0 !important;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    text-shadow: none;
  }
`;
