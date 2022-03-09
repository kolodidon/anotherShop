import styled from "styled-components";
import DefaultImage from "../images/DefaultImage.jpg";

const FooterWrapper = styled.div`
    position: relative;
    margin-top: 55px;
    width: 100%;
    height: 215px;
    padding: 2.343% 9.151% 2.563% 3.661%;
    background: #F8F8F8;
    @media only screen and (max-width: 505px) {
        height: 270px;
    }
`;
const FooterUpperWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 666px) {
        flex-direction: column;
    } 
`
const FooterHeading = styled.span`
    font-family: 'Montserrat Regular', sans-serif;
    font-size: 41px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
    color: #2D2D2F;
`
const FooterRightWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 505px) {
        flex-direction: column;
    } 
`
const FooterSocialSection = styled.div`
    margin-right: 31px;
    display: flex;
    flex-direction: column;
    & > span {
        margin-bottom: 10px;
    }
`
const FooterSocialsWrapper = styled.div`
    display: flex;
`;
const FooterSocialItem = styled.a`
    display: block;
    height: 28px;
    width: 28px;
    margin-right: 16px;
    background: ${(props) =>
      props.image
        ? `url(${props.image}) no-repeat center center`
        : `url(${DefaultImage}) no-repeat center center`};
    background-size: cover;
`
const FooterAppSection = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    margin-bottom: 10px;
  }
`;
const FooterAppsWrapper = styled.div`
    display: flex;
`;
const FooterAppItem = styled.a`
    display: block;
    height: 32px;
    width: 104px;
    margin-right: 20px;
    background: ${(props) =>
      props.image
        ? `url(${props.image}) no-repeat center center`
        : `url(${DefaultImage}) no-repeat center center`};
    background-size: cover;
    &:last-child {
        margin-right: 0;
    }
`
const FooterBottomWrapper = styled.div`
  position: absolute;
  bottom: 35px;
  left: calc(50% - 230px);
  width: 460px;
  display: flex;
  justify-content: space-between;
  & > a {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #8d8d8e;
  }
  @media only screen and (max-width: 505px) {
        left: calc(50% - 150px);
        bottom: 10px;
        width: 300px;
        flex-direction: column;
        text-align: center;
    } 
`;
export {
  FooterWrapper,
  FooterUpperWrapper,
  FooterHeading,
  FooterRightWrapper,
  FooterSocialSection,
  FooterSocialsWrapper,
  FooterSocialItem,
  FooterAppSection,
  FooterAppsWrapper,
  FooterAppItem,
  FooterBottomWrapper
};