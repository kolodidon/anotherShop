import React from 'react'
import {
Tag,
  ListItemWrapper,
  ListItemImage,
  ListItemTags,
  ListItemName,
  ListItemPrice,
  ListItemDiscount,
  ListItemButton,
} from "../styledComponents";

const ListItem = () => {
  return (
    <ListItemWrapper>
      <ListItemImage>
        <ListItemTags>
          <Tag backgroundColor={"#2967FF"}>Игрушка</Tag>
          <Tag backgroundColor={"#58CF18"}>Мартышка</Tag>
          <Tag backgroundColor={"#FFA601"}>Мишка</Tag>
          <Tag backgroundColor={"#FF7CB4"}>Подарок</Tag>
          <Tag backgroundColor={"#FFA601"}>Подарок коллегам</Tag>
          <Tag textColor={"#000000"} borderColor={"#FF2D87"}>
            День рождения Гриши
          </Tag>
        </ListItemTags>
      </ListItemImage>
      <ListItemName>Длинное название товара в одну строчку п...</ListItemName>
      <ListItemPrice>от 350 000 ₽</ListItemPrice>
      <ListItemDiscount>
        <span>450 500 ₽</span>
        <span>-10%</span>
      </ListItemDiscount>
      <ListItemButton>Добавить в корзину</ListItemButton>
    </ListItemWrapper>
  );
}

export default ListItem