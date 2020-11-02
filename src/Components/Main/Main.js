import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";

import Main001 from "./Main001"
import Main002 from "./Main002"
import Main003 from "./Main003"
import Main004 from "./Main004"
import Main005 from "./Main005"

const Main = () => (
    <ReactFullpage
      //fullpage options
      licenseKey = {'9925D61B-12FD4194-8F8304F5-4C55C4CA'}
      scrollingSpeed = {1000} 
      scrollOverflow = {true}
      paddingTop = "70px"
      touchSensitivity = "10"

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
                <Main001 />
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


export default Main;

