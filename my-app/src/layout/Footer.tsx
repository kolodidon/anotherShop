import React from 'react'
import {
  FooterWrapper,
  FooterUpperWrapper,
  FooterHeading,
  FooterRightWrapper,
  FooterSocialSection,
  FooterSocialsWrapper,
  FooterSocialItem,
  FooterAppSection,
  FooterAppsWrapper,
  FooterAppItem,
  FooterBottomWrapper
} from "../styledComponents";
import FacebookIcon from "../images/Facebook.svg";
import InstIcon from "../images/Inst.svg";
import VkIcon from "../images/Vk.svg";
import GooglePlayIcon from "../images/GooglePlay.svg";
import AppStoreIcon from "../images/AppStore.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterUpperWrapper>
        <FooterHeading>React</FooterHeading>
        <FooterRightWrapper>
          <FooterSocialSection>
            <span>Присоединяйтесь к нам</span>
            <FooterSocialsWrapper>
              <FooterSocialItem href="#" image={FacebookIcon} />
              <FooterSocialItem href="#" image={InstIcon} />
              <FooterSocialItem href="#" image={VkIcon} />
            </FooterSocialsWrapper>
          </FooterSocialSection>
          <FooterAppSection>
            <span>Устанавливайте приложение</span>
            <FooterAppsWrapper>
              <FooterAppItem href="#" image={GooglePlayIcon} />
              <FooterAppItem href="#" image={AppStoreIcon} />
            </FooterAppsWrapper>
          </FooterAppSection>
        </FooterRightWrapper>
      </FooterUpperWrapper>
      <FooterBottomWrapper>
        <a href="#">© Sionic</a>
        <a href="#">Правовая информация</a>
        <a href="#">Политика конфиденциальности</a>
      </FooterBottomWrapper>
    </FooterWrapper>
  );
}

export default Footer