import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
position: fixed;
top: 0;
left: 0;
padding: 27px;
z-index: 20;
background:none;
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
`

const MenuBtn = () => (
    <Button>
        <div></div>
        <div></div>
        <div></div>
    </Button>
)

export default MenuBtn;