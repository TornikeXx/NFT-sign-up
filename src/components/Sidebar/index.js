import React from 'react'
import styled from 'styled-components'
import { under } from '../../BreakPoints'
import InputDesign from '../inputs'
import Google from '../../assets/Google.png'


const SideBarWrapper = styled.div`
width:330px ;
margin-bottom:auto;
/* padding-left:15vh ; */
padding-top:2vh ;
${under.med`
padding-left:0;
padding-top:2vh;

`}
`
const Register = styled.div`
display:flex ;
justify-content:center ;
`

const Button = styled.button`
width:330px ;
font-size:16px ;
font-weight:500 ;
margin-top:20px ;
padding:9px ;
border:none ;
color:white ;
border-radius:5px ;
background-color:#5429FF ;
&:hover{
    background-color:#EFF0FF ;
    transition:0.3s ;
    color:#344054 ;
    cursor:pointer ;
    border:solid 0.5px grey ;
}
`
const SecondaryButton = styled(Button)`
background-color:#EFF0FF ;
padding:5px ;
display:flex ;
align-items:center ;
justify-content:center ;
color:#344054 ;
border:solid 0.5px grey ;
&:hover{
    background-color:#5429FF ;
    color:white ;

}
`
const H5 = styled.h5`
margin-bottom:5px;
color:#344054 ;
`;
const StyledH5 = styled(H5)`
color:#5429FF
`;
const H1 = styled.h1`
font-size:40px ;
color:#344054 ;
font-weight:700 ;
`
const P = styled.p`
font-size:16px ;
font-weight:400 ;
color:#667085;
`



const SideBar = () => {
    return (
        <SideBarWrapper>
            <H1>NFT Access</H1>
            <P>Please fill your detail to access your account</P>
            <InputDesign />
            <Button>Sign In</Button>
            <SecondaryButton><img src={Google} alt="/" /> Sign In With Google</SecondaryButton>
            <Register>
                <H5>Dont have an acccount? </H5><StyledH5>Sign up</StyledH5>
            </Register>
        </SideBarWrapper>
    )
}

export default SideBar;
