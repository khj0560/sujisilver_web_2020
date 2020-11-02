import React from 'react';
import Main from "./Main/Main";
import MobileMain from "./Main/MobileMain";
import Header from "./Header/Header";
import MobileHeader from "./Header/MobileHeader";
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import {BrowserView, MobileView} from "react-device-detect";

const Contents = styled.div`
  min-width: 1200px;

  @media (max-width: 1200px) {
    min-width: 250px;
  }
 ` 

export default() => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
          <BrowserView>
            <Header />
          </BrowserView>
          <MobileView>
            <MobileHeader />
          </MobileView>
          <Contents>
            <BrowserView>
              <Main />
            </BrowserView>
            <MobileView>
              <MobileMain />
            </MobileView>
          </Contents>
      </>
    </ThemeProvider>
  );
}
