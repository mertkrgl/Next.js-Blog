import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
font-size: 16px;
color: #fff;
text-decoration: none;
&:hover{
    color: rgba(255, 255, 255, 0.7);
}

`


const Button = ({href ,children}) => {
    return (
        <StyledLink href={href} passHref>
            {children}
        </StyledLink>

    )

};

export default Button
