import styled from "styled-components";
import DefaultImage from "../images/DefaultImage.jpg";
import {Button} from './';

const MainHeader = styled.span`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #2d2d2f;
`;
const Settings = styled.span`
  margin-left: 11.099%;
  font-weight: 600;
  font-size: 12px;
  line-height: 127.7%;
  text-align: center;
  color: #2967ff;
`;
const Tags = styled.div`
  margin-top: 18px;
  margin-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
`;
const Tag = styled.span`
  margin-right: 6px;
  margin-bottom: 6px;
  padding: 2px 10px;
  height: 24px;
  color: ${(props) => (props.textColor ? `${props.textColor}` : "#ffffff")};
  background-color: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : "#ffffff"};
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : "unset"};
  border-radius: 41px;
  font-size: 14px;

  &:last-child {
    margin-right: 0;
  }
`;
const List = styled.div`
  width: 95.022%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2.183%;
  
  @media only screen and (max-width: 1366px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 990px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 730px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 472px) {
    grid-template-columns: 1fr;
  }
`;
const ListItemWrapper = styled.div`
  height: 283px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
const ListItemImage = styled.div`
    position: relative;
  max-width: 100%;
  width: 100%;
  height: 138px;
  margin-bottom: 5px;
  background: ${(props) =>
    props.image
      ? `url(${props.image}) no-repeat center center`
      : `url(${DefaultImage}) no-repeat center center`};
  background-size: cover;
  overflow: hidden;
`;
const ListItemTags = styled.div`
    position: absolute;
    bottom: 13px;
    left: 13px;
    width: 100%;
    height: 24px;
    display: flex;
    overflow: hidden;
`;
const ListItemName = styled.span`
  height: 40px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #2d2d2f;
`;
const ListItemPrice = styled.span`
  height: 26px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  color: #2967ff;
`;
const ListItemDiscount = styled.div`
  & > span:first-child {
    margin-right: 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #8d8d8e;
    text-decoration: line-through;
  }
  & > span:last-child {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #ff2d87;
  }
`;
const ListItemButton = styled(Button)`
    font-size: 14px;
`
const ShowMoreBtn = styled.button`
  margin-top: 10px;
  margin-left: calc(47.51% - 146px);
  height: 50px;
  width: 292px;
  border-radius: 51px;
  background: #F0F4FB;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #727280;
`
export {
  MainHeader,
  Settings,
  Tags,
  Tag,
  List,
  ListItemWrapper,
  ListItemImage,
  ListItemTags,
  ListItemName,
  ListItemPrice,
  ListItemDiscount,
  ListItemButton,
  ShowMoreBtn
};
