import React from 'react';
import Main from "../Routes/Main";
import Header from "./Header/Header";
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import {isMobile} from "react-device-detect";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Routes from "./Routes";

const Contents = styled.div`
    min-width: 250px;
    margin-top: ${props => props.paddingVal};
 ` 

export default() => {
  let paddingValue = "70px"
  if (isMobile || window.innerWidth < 1024) {
    paddingValue = "113px"
  }
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <Header/>
          <Route exact={true} path="/" component={Main}/>
          <Contents paddingVal={paddingValue} >
            <Routes />
          </Contents>  
        </Router>
      </>
    </ThemeProvider>
  )
}
