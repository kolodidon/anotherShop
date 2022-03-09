import styled from "styled-components";
import { GrayText, BlueText } from './'
 
const HeaderWrapper = styled.div`
    margin-bottom: 30px;
    height: 82px;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 833px) {
        justify-content: space-between;
        margin-right: 3.81355932203%;
        & > :nth-child(2),
        & > :nth-child(3) {
            display: none;
        }
        & > * {
            margin: 0 !important;
        }
    } 
`;
const HeaderHeading = styled.h1`
    margin-right: 2.87863070539%;
    font-size: 37px;
    font-weight: 700;
`;
const Address = styled(GrayText)`
    max-width: 14.4190871369%;
    margin-left: 0.90767634854%;
    margin-right: 2.07468879668%;
    white-space: nowrap;
    overflow: hidden;
`
const SearchWrapper = styled.div`
    width: 48.5477178423%;
    position: relative;
`;
const SearchInput = styled.input`
    width: 100%;
    padding: 12px 16px;
    font-size: 16px;
    border: 1px solid #F0F4FB;
    border-radius: 36px;
`
const SearchButton = styled.button`
    position: absolute;
    top: 4px;
    right: 4px;
    width: 20.0854700855%;
    height: 84%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F0F4FB;
    border-radius: 41px;
`
const CartButton = styled.button`
    min-width: 50px;
    min-height: 50px;
    position: relative;
    margin-left: 2.07468879668%;
    margin-right: 2.07468879668%;
    padding-left: 4px;
    border: 1px solid #727280;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const CartCounter = styled(BlueText)`
    position: absolute;
    padding: 0px 1px 0px 2px;
    background: #fff;
    top: -2px;
    left: 28px;
    font-weight: 600;
`;
const Avatar = styled.div`
    min-width: 50px;
    min-height: 50px;
    margin-right: 4.97925311203%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
`

export {
    HeaderWrapper, 
    HeaderHeading,
    Address,
    SearchWrapper,
    SearchInput,
    SearchButton,
    CartButton,
    CartCounter,
    Avatar
};