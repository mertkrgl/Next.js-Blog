import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: blue;
  padding: 30px;

`;


export default () => 
<HeaderDiv>
<Link href="/" passHref>
    Ana Sayfa
</Link>

<Link href="/about" passHref>
    Hakkımızda
</Link>
</HeaderDiv>



