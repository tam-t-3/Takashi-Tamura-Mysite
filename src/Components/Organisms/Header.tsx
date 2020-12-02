import React from "react";
import Logo from "../Atoms/Logo";
import Humberger from "../Molecules/Humberger";
import styled from "styled-components";

const Header = () => {
  return (
    <LayoutHeader>
      <Logo />
      <Humberger />
    </LayoutHeader>
  );
};

const LayoutHeader = styled.div`
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
`;

export default Header;
