import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./LinkAnimation";
import { aboutTxt } from "../../Constant/strings";
import styled from "styled-components";

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
`;

export default Logo;
