import React from 'react';
import styled from 'styled-components';
import Frame from '../../assets/Frame.png';
import { under } from '../../BreakPoints'

const LogoWrapper = styled.div`
margin:0;
margin-bottom:auto;
padding:0 ;
display:grid;
grid-template-columns: 0.1fr 2fr;
align-items: center;
gap: 10px;
padding-left:0 ;
padding-top:0 ;
${under.med`
padding-left:0;
display:flex;
flex-direction:column;
gap:0;
padding-top:5vh
`}
`
const H4 = styled.h4`
font-size:16px ;
font-weight:600 ;
color:#000000 ;
`


const Logo = () => {
    return (
        <LogoWrapper>
            <img src={Frame} alt="" />
            <H4>PNFT Market</H4>
        </LogoWrapper>
    )
}

export default Logo;
