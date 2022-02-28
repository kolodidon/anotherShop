import React from "react";
import { HeaderHeading, GrayText } from "../styledComponents";
import { ReactComponent as LocationIcon } from "../images/LocationIcon.svg";

const Header = () => {
  return (
    <div>
      <HeaderHeading>React</HeaderHeading>
      <LocationIcon />
      <GrayText fontSize={14}>Александровск-Са...</GrayText>
    </div>
  );
};

export default Header;
