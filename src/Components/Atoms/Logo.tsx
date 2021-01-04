import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavLink from "./LinkAnimation";
import LiquidImg from "./LiquidImg";
import logo from "../../assets/images/logo.svg";

interface Props {
  aboutTxt: {
    myname: string;
  };
}

const Logo: React.FC<Props> = () => {
  return (
    <Li>
      <Link to="/">
        <NavLink>
          <StyleImg>
            <LiquidImg src={logo} />
          </StyleImg>
        </NavLink>
      </Link>
    </Li>
  );
};

const Li = styled.li`
  display: inline;
`;

const StyleImg = styled.div`
  width: 26px;
`;

export default Logo;
