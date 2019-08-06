import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.div`
    width: 100vw;
    text-align: center;
    background: darkslateblue;
    padding: 2em 0;
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: bolder;
    color: #fff;
    letter-spacing: 3px;
`;

export default function Navbar() {
    return (
        <NavbarWrapper>
            <Title>Todo List with React&#38;Redux&#38;Firebase</Title>
        </NavbarWrapper>
    );
}
