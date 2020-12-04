import React from "react";
import styled from "styled-components";
import Mail from "../Atoms/Mail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import NavLink from "../Atoms/LinkAnimation";

const Footer = () => {
  return (
    <LayoutFooter>
      <LayoutLink>
        <LayoutIcon href="https://twitter.com/takashi_t_20" target="_blank">
          <NavLink>{<FontAwesomeIcon icon={faTwitter} />}</NavLink>
        </LayoutIcon>

        <LayoutIcon href="https://www.instagram.com/takashi.gram.20/" target="_blank">
          <NavLink>{<FontAwesomeIcon icon={faInstagram} />}</NavLink>
        </LayoutIcon>

        <LayoutMail>
          <Mail />
        </LayoutMail>
      </LayoutLink>
    </LayoutFooter>
  );
};

const LayoutFooter = styled.div`
width: 100%;
padding: 32px 64px;
box-sizing: border-box;
`

const LayoutLink = styled.div`
`

const LayoutIcon = styled.a`
  margin-right: 16px;
`;

const LayoutMail = styled.div`
  display: inline;
  text-align: right;
`;

export default Footer;
