import styled from "styled-components";

const GrayText = styled.span`
    color: #727280;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : "12px"}
`;
const BlueText = styled.span`
    color: #2967FF;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : "12px"}
`;
const Button = styled.button`
    padding: ${props => props.primary ? "10px 25px" : "10px 40px"};
    background-color: ${props => props.primary ? "#2967FF" : "unset"};
    border-radius: ${props => props.primary ? "51px" : "26px"};
    border: ${props => props.primary ? "unset" : "1px solid #2967FF"};
    color: ${props => props.primary ? "#ffffff" : "#2967FF"};
    width: ${props => props.width ? `${props.width}%` : "unset"};
`

export {
    GrayText,
    BlueText,
    Button
};