import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
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

const Main = () => {
  let paddingValue = "70px"
  if (window.innerWidth < 1024) {
    paddingValue = "113px"
  } else if (isMobile || window.innerWidth < 768) {
    paddingValue = "0px"
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

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
                {renderContent()}
            </div>
            <div className="section">
                <Main002 />
            </div>
            <div className="section">
                <Main003 />
            </div>
            <div className="section">
                <Main004 />
            </div>
            <div className="section">
                <Main005 />
            </div>                        
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default Main;

