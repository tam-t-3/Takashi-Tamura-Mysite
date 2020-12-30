import React from "react";
import styled from "styled-components";
import { aboutTxt } from "../../Constant/strings";
import NavLink from "./LinkAnimation";

interface Props {
  aboutTxt: {
    mymail: string;
  };
}

const Mail: React.FC<Props> = () => {
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
