import styled from "styled-components";

const Wrapper = styled.div`
    padding-left: 3.66032210835%;
    display: grid;
    grid-template-columns: 73.2522796353% auto;

    @media only screen and (max-width: 1130px) {
        display: flex;
        grid-template-columns: none;
        flex-direction: column;
    }   
`;
const MainWrapper = styled.div`
`;
const FooterWrapper = styled.div`
`;

export {
    Wrapper, 
    MainWrapper,  
    FooterWrapper
};