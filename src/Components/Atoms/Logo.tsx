import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavLink from "./LinkAnimation";
import { aboutTxt } from "../../Constant/strings";

const Logo = () => {
  return (
    <Li>
      <Link to="/">
        <NavLink>{aboutTxt.myname}</NavLink>
      </Link>
    </Li>
  );
};

const Li = styled.li`
  display: inline;
  font-size: 16px;
`;

export default Logo;
