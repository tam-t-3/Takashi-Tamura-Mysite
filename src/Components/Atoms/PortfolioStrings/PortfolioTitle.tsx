import React from "react";
import styled from "styled-components";
import { navigation } from "../../../Constant/strings";

const PortfolioTitle = () => {
  return <Title>{navigation.portfolio}</Title>;
};

const Title = styled.h1`
  text-align: center;
  margin: 0 auto;
  letter-spacing: 6px;
  padding-top: 217px;
`;

export default PortfolioTitle;
