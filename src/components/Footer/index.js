import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksWrapper, FooterLinksContainer,
    FooterLinkItems, FooterLink, FooterLinkTitle, SocialMediaWrap, SocialMedia, SocialLogo,
    SocialIcons, SocialIconLink, WebsiteRights
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Internet WiFi</FooterLinkTitle>
                            <FooterLink to='signin'>Planes</FooterLink>
                            <FooterLink to='signin'>Instalaciones</FooterLink>
                            <FooterLink to='signin'>Promociones</FooterLink>
                            
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Planes</FooterLinkTitle>
                            <FooterLink to='signin'>Plan Home</FooterLink>
                            <FooterLink to='signin'>Plan Office</FooterLink>
                            <FooterLink to='signin'>Plan Empresarial</FooterLink>
                            
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Clientes</FooterLinkTitle>
                            <FooterLink to='signin'>Pagos</FooterLink>
                            <FooterLink to='signin'>Facturación</FooterLink>
                            <FooterLink to='signin'>Registrate</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contacto</FooterLinkTitle>
                            <FooterLink to='signin'>Servicio técnico</FooterLink>
                            <FooterLink to='signin'>Atención al Cliente</FooterLink>
                            
                    </FooterLinkItems>
                </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>RedWan IPS</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_bank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_bank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                           
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                <WebsiteRights>{new Date().getFullYear() }  
                 © All rights  reserved | By Shaems</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
