import styled, {createGlobalStyle} from "styled-components";
import {CustomTheme} from "./defaultTheme";

interface GlobalStyleProps {
  theme: CustomTheme;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    margin: 0;
    background-color: ${({theme}) => (theme.backgroundColor)};
  }
`

export const Main = styled.main`
  padding: 0;
  width: 100%;
  height: auto;

  header {
    width: 100%;
    height: 5rem;
  }

  .header-box {
    margin: auto;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .aurora-logo {
    width: 10rem;
  }

  .toggle-container {
    margin-left: auto;

    & {
      margin-top: 2.3rem;
    }
  }

  .editor-container {
    margin: 5vh auto 15vh;
    width: 70%;
  }

  @media (max-width: 549px) {
    .header-box {
      margin: auto;
      width: 90%;
      height: 100%;
    }

    .header-box .aurora-logo {
      margin-top: 1.5rem;
      width: 8rem;
    }

    .editor-container {
      width: 90%;
    }

    .toggle-container {
      margin-left: auto;

      & {
        margin-top: 3.8rem;
      }
    }
  }
`