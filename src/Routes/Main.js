import React, { useState } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import styled from "styled-components";
import Main001 from "../Components/Main/Main001";
import Main002 from "../Components/Main/Main002";
import Main003 from "../Components/Main/Main003";
import Main004 from "../Components/Main/Main004";
import Main005 from "../Components/Main/Main005";
import MobileMain001 from "../Components/Main/Main001Mobile";

const MainDiv = styled.div`
  padding-top: 113px;
`
const Div = styled.div`
  background-color: ${(props) => props.color ? props.theme.bgColor : props.theme.whiteColor};
  margin: 0 auto;
  padding: 0 30px;
`
const MobileDiv = styled.div`
  background-color: ${(props) => props.color ? props.theme.bgColor : props.theme.whiteColor};
  margin: 0 auto;
  height: 100% !important;
  padding-top: 50px !important;
  padding: 50px 20px;
  
  & > div{
    height: 100% !important;
  }
`
const Main = () => {
  const [paddingValue, setPaddingValue] = useState(window.innerWidth < 1024 ? "113px" : "70px")
  if(window.innerWidth < 768) {  
    return (
      <>
        <MainDiv>
          <MobileMain001/>
        </MainDiv>
        <MobileDiv>
          <Main002 />
        </MobileDiv>
        <MobileDiv color="bg">
          <Main003 />
        </MobileDiv>
        <MobileDiv>
          <Main004 />
        </MobileDiv>
        <MobileDiv color="bg">
          <Main005 />
        </MobileDiv>
      </>
    );
  }else {
    return (
      <ReactFullpage
        //fullpage options
        licenseKey = {'9925D61B-12FD4194-8F8304F5-4C55C4CA'}
        scrollingSpeed = {1000} 
        scrollOverflow = {true}
        scrollOverflowOptions = {{scrollbars: false}}
        paddingTop = {paddingValue}
        touchSensitivity = "10"
        responsiveWidth = "768"
        scrollBar = {false}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                  <Main001/>
              </div>
              <Div className="section">
                  <Main002 />
              </Div>
              <Div className="section" color="bg">
                  <Main003 />
              </Div>
              <Div className="section">
                  <Main004 />
              </Div>
              <Div className="section" color="bg">
                  <Main005 />
              </Div>                        
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
  }
}
export default Main;