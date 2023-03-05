import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import Colors from './Colors';

const GlobalStyle = createGlobalStyle`
  ${css`
      ${reset}
      @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Encode+Sans+Expanded:wght@400;700&display=swap');

      @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap');

      @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@200;300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
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
