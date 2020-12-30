import React from "react";
import styled from "styled-components";
import TriggerMenu from "../Atoms/Menu";

const Humberger: React.FC = () => {
  return (
    <NavDiv id="navArea">
      <TriggerMenu />
    </NavDiv>
  );
};

const NavDiv = styled.nav`
  float: right;
`;

export default Humberger;
