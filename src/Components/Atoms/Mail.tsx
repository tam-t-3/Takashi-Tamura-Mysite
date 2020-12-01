import React from "react";
import { aboutTxt } from "../../Constant/strings";
import styled from "styled-components";
import NavLink from "./LinkAnimation";

const Mail = () => {
  return (
    <MailLi>
      <a href="mailto:takashi.t.abc.20@gmail.com">
        <NavLink>{aboutTxt.mymail}</NavLink>
      </a>
    </MailLi>
  );
};

const MailLi = styled.li`
  display: inline;
  list-style: none;
`;

export default Mail;
