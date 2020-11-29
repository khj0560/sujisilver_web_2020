import React, {useState} from 'react';
import Main from "../Routes/Main";
import Header from "./Header/Header";
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import {isMobile} from "react-device-detect";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Routes from "./Routes";

const Contents = styled.div`
    width: 1240px;
    margin: 0 auto;
    margin-top: ${props => props.paddingVal};

  @media (max-width: 1440px) {
    width: 1024px;
    padding: 0 30px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }
 ` 

export default() => {
  const [paddingValue, setPaddingValue] = useState(window.innerWidth < 1024 ? "113px" : "70px")
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <Header/>
          <Route exact={true} path="/" component={Main}/>
          <Route exact={true} path="/sujisilver_web_2020" component={Main}/>
          <Contents paddingVal={paddingValue} >
            <Routes />
          </Contents>  
        </Router>
      </>
    </ThemeProvider>
  )
}
