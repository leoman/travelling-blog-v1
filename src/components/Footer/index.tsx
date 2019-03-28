import React from 'react';
import moment from 'moment';
import { FooterWrapper, Links, Link, TextWrapper, CopyRight } from './styles';

export const Footer = () => (
    <FooterWrapper>
       
        <Links>
            <Link to={'/'}>Home</Link>
            <Link to={'/posts'}>Articles</Link>
        </Links>
        
        <TextWrapper>
            <CopyRight>© Copyright {moment(Date.now()).format("YYYY")} Blink.Dev Limited. All rights reserved.</CopyRight>
        </TextWrapper> 
        
    </FooterWrapper>
);

export default Footer;