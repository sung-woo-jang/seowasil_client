import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import Colors from './Colors';

const GlobalStyle = createGlobalStyle`
  ${css`
      ${reset}
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Gothic A1', -apple-system, BlinkMacSystemFont, 'Do Hyeon', 'Segoe UI',
              'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-decoration: none;
          list-style: none;
          color: ${Colors.Black};
      }
  `}
`;

export default GlobalStyle;
