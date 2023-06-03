import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: blue;
  padding: 30px;

`;


export default () => 
<div>
<HeaderDiv>
<Link href="/" passHref>
    Ana Sayfa
</Link>
</HeaderDiv>


<Link href="/about" passHref>
    Hakkımızda
</Link>

</div>

