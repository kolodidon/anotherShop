import React from 'react'
import { OfferPromoWrapper, OfferPromoText, OfferPromoButton } from "../styledComponents";
import { ReactComponent as OfferPromoImage } from "../images/OfferPromoImage.svg";

const OfferPromo = () => {
  return (
    <OfferPromoWrapper>
      <OfferPromoImage/>
      <OfferPromoText fontSize={20}>
        Получай товары БЕСПЛАТНО!
      </OfferPromoText>
      <OfferPromoButton primary width={62.61}>Подробнее</OfferPromoButton>
    </OfferPromoWrapper>
  )
}

export default OfferPromo;