import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['green-500']};
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    background-color: ${({ theme }) => theme.colors['gray-900']};
    color: ${({ theme }) => theme.colors['gray-300']};

    -webkit-font-smoothing: antialiased;
  }
`
