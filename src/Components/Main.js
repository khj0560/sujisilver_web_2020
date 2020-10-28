import React from 'react';
//import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";

import Main001 from "./Main/Main001"
import Main002 from "./Main/Main002"
import Main003 from "./Main/Main003"
import Main004 from "./Main/Main004"
import Main005 from "./Main/Main005"

const Main = () => (
    <ReactFullpage
      //fullpage options
      licenseKey = {'9925D61B-12FD4194-8F8304F5-4C55C4CA'}
      scrollingSpeed = {1000} 
      scrollOverflow = {true}
      paddingTop = "70px"

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

