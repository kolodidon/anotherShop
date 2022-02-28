import styled from "styled-components";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMMON
const GrayText = styled.span`
    color: #727280;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : "12px"}
`;

//LAYOUT
const Wrapper = styled.div`
    padding-left: 3.66%;
    display: grid;
    grid-template-columns: 71.7% auto;
    column-gap: 1.6%;
`;
const MainWrapper = styled.div`
    background-color: red;
`;
const AsideWrapper = styled.aside`
    background-color: blue;
`;
const FooterWrapper = styled.div`
    background-color: yellow;
`;

//HEADER
const HeaderHeading = styled.h1`
    font-size: 37px;
    font-weight: 700;
`;

export {
    GrayText,
    Wrapper, 
    MainWrapper, 
    AsideWrapper, 
    FooterWrapper, 
    HeaderHeading
};