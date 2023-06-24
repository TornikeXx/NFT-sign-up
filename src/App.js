import styled from "styled-components";
import Pic from './assets/Frame 1.png'
import { under } from './BreakPoints'
import Logo from "./components/Logo";
import SideBar from "./components/Sidebar";

const HomePage = styled.div`
max-height:100vh ;
max-width:100vw ;
display:flex ;
justify-content:space-evenly ;

${under.med` 
justify-content:space-around;
`}
`
const Img = styled.img`
background-size:cover ;
padding-top:3vh ; 
padding-bottom:3vh ;
/* padding-right:3vh ; */
${under.med`
    display:none;
    `}
`
const MainContent = styled.div`
/* padding-left:15vh ;
padding-top:10vh ; */
background-size:cover ;
display:flex;
justify-content:center;
flex-direction:column;
${under.med`
align-items:center;
margin-left:10%;
margin-right:10%

`}
`





function App() {
  return (
    <HomePage>
      <MainContent>
        <Logo />
        <SideBar />
      </MainContent>
      <Img src={Pic} />
    </HomePage>

  );
}

export default App;