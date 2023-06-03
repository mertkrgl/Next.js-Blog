import Link from "next/link"
import styled from "styled-components"
import Header from "./Header"

const StyledHeader = styled(Header)`
border: 10px black;
background-color: red;
`

export default ({ title, children }) =>
    <div>
        <h1>{title}</h1>
        <Header />
        <div style={{ padding: "20px", margin: "20px", backgroundColor: "red" }}>{children}</div>


    </div>

