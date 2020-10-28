import React from 'react';
import Main from "./Main";
import Header from "./Header";
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";

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
          <Header />
          <Contents>
            <Main />
          </Contents>
      </>
    </ThemeProvider>
  );
}
