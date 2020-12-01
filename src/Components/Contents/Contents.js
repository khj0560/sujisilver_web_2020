import React, {useState} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import Routes from "../Routes";

const ContentDiv = styled.div`
    padding-top: ${props => props.paddingVal};
`
const Wrapper = styled.div`
    width: 1240px;
    margin: 0 auto;
    background-color: ${props => props.theme.whiteColor};

  @media (max-width: 1440px) {
    width: 1024px;
    padding: 0 30px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }
 ` 

export default withRouter(({location: {pathname}}) => {
    const [paddingValue, setPaddingValue] = useState(window.innerWidth < 1024 ? "113px" : "70px");
    if(pathname != "/") {
        return (
            <ContentDiv paddingVal={paddingValue}>
                <Wrapper>
                    <Routes />
                </Wrapper>  
            </ContentDiv>
        )
    } else {
        return (
            <Routes />
        )
    }

 }
);