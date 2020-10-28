import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const ButtonWrapper = styled.div`
    /* padding: 0 30px;

    @media(max-width: 350px) {
        padding: 0 10px;
    } */
    & button {
        background: none;
        border: 2px solid ${props => props.theme.pointColor};
        border-radius: 60px;
        color: ${props => props.theme.pointColor};
        display: block;
        font-family: 'notoB';
        margin: 50px auto;
        width: 450px;
        padding: 30px 50px;
        position: relative;

        @media(max-width: 900px) {
            width: 100%;
            padding: 20px 30px;
            border: 0;
            color: ${props => props.theme.whiteColor};
            background-color: ${props => props.theme.pointColor};
        }
    }
`

const Button = ({type,text,bg,color}) => (
    <ButtonWrapper>
        <button><h4>{text}</h4></button>
    </ButtonWrapper>
);

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    bg: PropTypes.string,
    color: PropTypes.string
};

export default Button;