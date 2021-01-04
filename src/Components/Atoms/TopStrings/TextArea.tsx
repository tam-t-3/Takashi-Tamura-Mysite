import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const TextAreaComp: React.FC<Props> = ({ children }) => {
  return <T>{children}</T>;
};

const T = styled.p`
  line-height: 2;
`;

export default TextAreaComp;
