import React, { useState } from "react";
import Main from "../Routes/Main";
import Header from "./Header/Header";
import Contents from "./Contents/Contents"
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import {BrowserRouter as Router, Route} from "react-router-dom";

const Menu = styled.div`
  display: none;
  background-color: ${props => props.theme.subPointColor};
  position: fixed;
  justify-content: center;
  padding-top: 30px;
  top: 0; bottom: 0; left: 0;
  width: 230px;
  z-index: -1;
  & li {
    color: #fff;
  }
  ${props =>{
      if(!props.slideActive) {
        return `display: flex`
    }
  }};
`
const Wrapper = styled.div`
  position: relative;
	transition: transform .2s ease; 
  ${props =>{
    if(props.slideActive) {
      return `transform: translateX(230px);`
    }
  }}
`
const Button = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  padding: 27px;
  z-index: 20;
  cursor: pointer;
  background: none;
  & > div {
    position: relative;
    display: block;
    width: 22px;
    height: 4px;
    margin: 3px auto;
    background-color: ${props => props.theme.subPointColor};
    border-radius: 10px;
  }
  & > div::nth-of-type(1) {
    margin-top: 0px;
  }
  & > div::nth-of-type(3) {
    margin-bottom: 0px;
  }  
  ${props =>{
      if(!props.displayOn) {
        return `display: none`
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
          <Menu displayOn={displayOn}>
            <ul>
              <li>센터소개</li>
              <li>주야간보호 안내</li>
              <li>요양원 안내</li>
              <li>방문요양 안내</li>
              <li>상담신청</li>
            </ul>
          </Menu>
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
