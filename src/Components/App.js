import React, {useState, useEffect} from 'react';
import Main from "../Routes/Main";
import Header from "./Header/Header";
import MenuBtn from "./Header/MenuBtn"
import Contents from "./Contents/Contents"
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "core-js"

const Menu = styled.div`
background-color: #222;
position: fixed;
top: 0; bottom: 0; left: 0;
width: 220px;
z-index: -1;
& li {
  color: #fff;
}
`
const Wrapper = styled.div`
  position: relative;
	transition: transform .2s ease; 
  ${props =>{
    if(props.slideActive) {
      return `transform: translateX(220px);`
    }
  }};

`
export default() => {
  const [slideActive, setSlideActive] = useState(false);
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <Menu>
            <ul>
              <li>ttt</li>
              <li>ttt</li>
              <li>ttt</li>
            </ul>
          </Menu>
          <Wrapper slideActive={slideActive}>
            <MenuBtn onClick={() => {console.log("eee")}}/>
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
