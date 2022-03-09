import styled from "styled-components";
import DefaultImage from "../images/DefaultImage.jpg"
import {BlueText, Button} from "./";

const AsideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 1130px) {
        margin-right: 3.8%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 2%;
    }   
    @media only screen and (max-width: 966px) {
        grid-template-columns: 1fr 1fr;
    } 
    @media only screen and (max-width: 666px) {
        grid-template-columns: 1fr;
    } 
`;

const AsideBlock = styled.div`
    min-width: 88.603988604%;
    height: 168px;
    margin-bottom: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.bc 
        ? `url(${props.bc}) no-repeat center center`
        : `url(${DefaultImage}) no-repeat center center`
    };
    background-size: cover;

    @media only screen and (max-width: 1130px) {
        min-width: unset;
        margin: 0;
    } 
`;
const AsideBlockText = styled.span`
    width: 53.4564576119%;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #ffffff;
`;
const OfferPromoWrapper = styled.div`
    position: relative;
    margin: 27px 0 33px 0;
    min-width: 88.603988604%;
    height: 143px;
    border: 1px solid #FF2D87;
    border-radius: 20px;
    & > svg {
        position: absolute;
        top: 22.7%;
        left: -3.55%;
        @media only screen and (max-width: 1130px) {
            left: -11.55%;
        } 
        @media only screen and (max-width: 966px) {
            left: 4%;
        } 
        @media only screen and (max-width: 740px) {
            left: 1%;
        }
        @media only screen and (max-width: 666px) {
            left: 5%;
        }
        @media only screen and (max-width: 414px) {
            left: 2%;
        }
    }
    @media only screen and (max-width: 966px) {
        min-width: unset;
        height: 168px;
        margin: 0;
    } 
`
const OfferPromoText = styled(BlueText)`
    position: absolute;
    top: 14.9%;
    left: 31.307%;
    line-height: 26px;
`
const OfferPromoButton = styled(Button)`
    position: absolute;
    top: 58.87%;
    left: 31.307%;
    @media only screen and (max-width: 1130px) {
        width: unset;
    } 
`

export { AsideWrapper, AsideBlock, AsideBlockText, OfferPromoWrapper, OfferPromoText, OfferPromoButton };