import styled from "styled-components"
import Header from "./Header"
import { createGlobalStyle } from "styled-components"

const GlobalStye = createGlobalStyle`
body {
    margin: 0;
    
}
`

const BodyDiv = styled.div`

`

export default ({ title, children }) =>
    <BodyDiv >
        <h1>{title}</h1>
        <Header />
        <div style={{ padding: "20px", margin: "20px", backgroundColor: "red" }}>{children}</div>


    </BodyDiv>

