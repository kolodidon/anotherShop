import React from 'react'
import {AsideWrapper, AsideBlock, AsideBlockText} from '../styledComponents';
import {OfferPromo} from '../components';
import OfferImage from "../images/OfferImage.jpg"
import OfferImage2 from "../images/OfferImage2.jpg"

const Aside = () => {
  return (
    <AsideWrapper>
      <OfferPromo/>
      <AsideBlock bc={OfferImage2}>
        <AsideBlockText>Новая коллекция</AsideBlockText>
      </AsideBlock>
      <AsideBlock bc={OfferImage}>
        <AsideBlockText>Новая коллекция</AsideBlockText>
      </AsideBlock>
      <AsideBlock bc={OfferImage2}>
        <AsideBlockText>Новая коллекция</AsideBlockText>
      </AsideBlock>
    </AsideWrapper>
  )
}

export default Aside