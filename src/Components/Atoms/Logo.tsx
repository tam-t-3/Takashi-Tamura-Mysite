import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./LinkAnimation";
import styled from "styled-components";
import LiquidImg from "./LiquidImg";
import logo from "../../assets/images/logo.svg";

const Logo = () => {
  return (
      <Li>
        <Link to="/">
          <NavLink>
            <LiquidImg src={logo} />
          </NavLink>
        </Link>
      </Li>
  );
};

const Li = styled.li`
  display: inline;
  font-size: 16px;
`;

export default Logo;
