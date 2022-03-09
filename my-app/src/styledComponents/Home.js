import styled from "styled-components";

const MainHeader = styled.span`
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #2D2D2F;  
`;
const Settings = styled.span`
    margin-left: 11.099%;
    font-weight: 600;
    font-size: 12px;
    line-height: 127.7%;
    text-align: center;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #2967FF;
`;
const Tags = styled.div`
    margin-top: 18px;
    display: flex;
    flex-wrap: wrap;
`
const Tag = styled.span`
    margin-right: 6px;
    margin-bottom: 6px;
    padding: 2px 10px;
    height: 24px;
    color: ${props => props.textColor ? `${props.textColor}` : "#ffffff"};
    background-color: ${props => props.backgroundColor ? `${props.backgroundColor}` : "#ffffff"};
    border: ${props => props.borderColor ? `1px solid ${props.borderColor}` : "unset"};
    border-radius: 41px;
    font-size: 14px;
    
    &:last-child {
        margin-right: 0;
    }
`

export { MainHeader, Settings, Tags, Tag };