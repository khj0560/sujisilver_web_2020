import React, { useState } from "react";
import Main from "../Routes/Main";
import Header from "./Header/Header";
import Menu, { Btn, Slider } from "./Header/Menu";
import Contents from "./Contents/Contents"
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import {BrowserRouter as Router, Route} from "react-router-dom";

const MobileMenu = styled(Menu)`
  ${props =>{
      if(!props.displayOn) {
        return `display: none;
          background-color: black;
        `
      }
    }};
`
const Wrapper = styled.div`
  ${Slider}
  ${props =>{
    if(props.slideActive) {
      return `transform: translateX(80%);`
    }
  }}
  @media(max-width: 580px) {
    background-color: ${(props) => props.theme.bgColor};
  }
`
const Button = styled.button`
  ${Btn}
  ${props =>{
      if(!props.displayOn) {
        return `display: none;`
      }
    }};
`
export default() => {
  const [displayOn] = useState(window.innerWidth < 580 ? true : false)
  const [slideActive, setSlideActive] = useState(false);
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <MobileMenu displayOn={displayOn} />
          <Wrapper slideActive={slideActive}>
            <Button onClick={() => {slideActive ? setSlideActive(false) : setSlideActive(true)}} displayOn={displayOn}>
                <div></div>
                <div></div>
                <div></div>
            </Button>
            <Header/>
            <Route exact={true} path="/" component={Main}/>
            <Route exact={true} path="/sujisilver_web_2020" component={Main}/>
            <Contents />  
          </Wrapper>  
        </Router>
      </>
    </ThemeProvider>
  )
}
