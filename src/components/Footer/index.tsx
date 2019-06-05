import React from 'react';
import moment from 'moment';
import { FooterWrapper, Links, FooterLink, TextWrapper, CopyRight } from './styles';

export const Footer = () => (
    <FooterWrapper>
       
        <Links>
            <FooterLink to={'/'}>Home</FooterLink>
            <FooterLink to={'/posts'}>Articles</FooterLink>
        </Links>
        
        <TextWrapper>
            <CopyRight>© Copyright {moment(Date.now()).format("YYYY")} Blink.Dev Limited. All rights reserved.</CopyRight>
        </TextWrapper> 
        
    </FooterWrapper>
);

export default Footer;