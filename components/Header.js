import Button from "./Button";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: #000;
  padding: 30px;
  display: flex;
  gap: 20px;


  span {
    font-size: 30px;
  }


`;



export default () => 
<HeaderDiv>
<Button href="/">Ana Sayfa</Button>
<Button href="/about">Hakkımda</Button>


</HeaderDiv>



