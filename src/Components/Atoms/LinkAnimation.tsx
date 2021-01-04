import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const LinkAnimation: React.FC<Props> = ({ children }) => {
  return <Li>{children}</Li>;
};

const Li = styled.li`
  color: #262525;
  position: relative;
  display: inline-block;
  text-decoration: none;
  ::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform 0.3s;
  }
  :hover::after {
    transform: scale(1, 1);
  }
`;

export default LinkAnimation;
