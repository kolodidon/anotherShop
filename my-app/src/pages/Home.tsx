import React from 'react';
import { ListItem } from "../components";
import { MainHeader, Settings, Tags, Tag, List, ShowMoreBtn } from '../styledComponents';

const Home: React.FC = () => {
  return (
    <>
      <MainHeader>Категории товаров</MainHeader>
      <Settings>Настройки</Settings>
      <Tags>
        <Tag backgroundColor={"#2967FF"}>Игрушка</Tag>
        <Tag backgroundColor={"#58CF18"}>Мартышка</Tag>
        <Tag backgroundColor={"#FFA601"}>Мишка</Tag>
        <Tag backgroundColor={"#FF7CB4"}>Подарок</Tag>
        <Tag backgroundColor={"#FFA601"}>Подарок коллегам</Tag>
        <Tag textColor={"#000000"} borderColor={"#FF2D87"}>День рождения Гриши</Tag>
      </Tags>
      <List>
        <ListItem/><ListItem/><ListItem/><ListItem/>
        <ListItem/><ListItem/><ListItem/><ListItem/>
        <ListItem/><ListItem/><ListItem/><ListItem/>
        <ListItem/><ListItem/><ListItem/><ListItem/>
      </List>
      <ShowMoreBtn>Показать больше товаров</ShowMoreBtn>
    </>
  )
}

export default Home