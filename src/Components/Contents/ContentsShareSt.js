import React from "react";
import { styled, css } from "styled-components";

export const TopTitle = css`
    padding: 100px 0 50px 0;
    text-align: center;
    color: ${props => props.theme.pointColor};
    & h3 {
        font-family: 'TB';
    }
    @media(max-width: 768px) {
        padding: 80px 0 30px 0;
    }
    @media(max-width: 768px) {
        padding: 50px 0 20px 0;
    }
`

export const Div = css`
    width: 100%;
    text-align: center;
    padding : ${props => props.padding ? "50px 0 30px 0" : "0"};
    color : ${props => props.textColor ? props.theme.pointColor : props.theme.darkGrayColor};
    ${props => {
        if(props.flex){
            return (
                `display: flex;
                justify-content: center;`
            )}
    }}
`
export const TitleDiv = css`
    width: 45px;
    height: 40px;
    background-color: ${props => props.theme.darkGrayColor};
    color: ${props => props.theme.whiteColor};
    margin: 0 15px;
`
export const TableDiv = css`
    width: 100%;
    display: flex;
    justify-content: center;
    & > table {
        display: table;
        table-layout: fixed;
        width: 100%;
        max-width: 1024px;
        border-collapse:collapse;
        border:1px solid ${props => props.theme.lightGrayColor};
        text-align: center;
        margin: 20px 0 40px 0;
        word-break: keep-all;
        font-size: 1rem;
            & > thead > tr {
            background-color: ${props => props.theme.darkGrayColor};  
            color: ${props => props.theme.whiteColor};
            & > th, td {
                border: 1px solid ${props => props.theme.lightGrayColor};
                padding: 10px 0; 
                vertical-align: middle;
            }
        }
        & > tbody > tr {
            & > th {
                background-color: #f0f0f0;  
                border: 1px solid ${props => props.theme.lightGrayColor};
                vertical-align: middle;
            }
            & td {
                border: 1px solid ${props => props.theme.lightGrayColor};
                padding: 10px 0; 
                vertical-align: middle;
            }
        }
    }
`
export const SmallP = css`
    color: ${props => props.theme.mediumGrayColor};
    /* font-size: 16px;
    @media(max-width: 480px) {
        font-size: 14px;
    } */
`

