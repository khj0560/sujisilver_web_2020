import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import styled from "styled-components";
import Main001 from "../Components/Main/Main001";
import Main002 from "../Components/Main/Main002";
import Main003 from "../Components/Main/Main003";
import Main004 from "../Components/Main/Main004";
import Main005 from "../Components/Main/Main005";
import MobileMain001 from "../Components/Main/Main001Mobile";
import {isMobile} from "react-device-detect";

const renderContent = () => {
  const width = window.innerWidth;
  if(isMobile || width < 768) {  
    return <MobileMain001/>
  }else{
    return <Main001/>
  } 
}
const MainDiv = styled.div`
  @media (max-width: 768px) {
    height: 100% !important;
  }
`
const Div = styled.div`
  background-color: ${(props) => props.color ? props.theme.bgColor : props.theme.whiteColor};
  margin: 0 auto;
  @media (max-width: 768px) {
    height: 100% !important;
    padding-top: 50px !important;
    padding: 50px 30px;
    
    & > div{
      height: 100% !important;;
    }
  }
`

const Main = () => {
  let paddingValue = "70px"
  if (window.innerWidth < 1024) {
    paddingValue = "113px"
  }
  return (
    <ReactFullpage
      //fullpage options
      licenseKey = {'9925D61B-12FD4194-8F8304F5-4C55C4CA'}
      scrollingSpeed = {1000} 
      scrollOverflow = {true}
      paddingTop = {paddingValue}
      touchSensitivity = "10"
      responsiveWidth = "768"
      scrollBar = {false}

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <MainDiv className="section">
                {renderContent()}
            </MainDiv>
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
  );
}

export default Main;

