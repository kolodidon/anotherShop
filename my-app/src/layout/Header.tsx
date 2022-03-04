import React from "react";
import { HeaderWrapper, HeaderHeading, Address, CartButton, CartCounter, Avatar } from "../styledComponents";
import { Search } from "../components";
import { ReactComponent as LocationIcon } from "../images/LocationIcon.svg";
import { ReactComponent as CartIcon } from "../images/CartIcon.svg";
import AvatarImg from "../images/Avatar.jpg"

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderHeading>React</HeaderHeading>
      <LocationIcon />
      <Address fontSize={14}>Александровск-C...</Address>
      <Search/>
      <CartButton>
        <CartIcon />
        <CartCounter fontSize={14}>10+</CartCounter>
      </CartButton>
      <Avatar>
        <img src={AvatarImg} alt="Avatar" />
      </Avatar>
    </HeaderWrapper>
  );
};

export default Header;
