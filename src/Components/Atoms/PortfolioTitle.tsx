import React from "react";
import { navigation } from "../../Constant/strings";
import styled from "styled-components";

const PortfolioTitle = () => {
  return (
    <Title>{navigation.portfolio}</Title>
  );
};

const Title = styled.h1`
  text-align: center;
  margin: 50px auto;
  letter-spacing: 6px;
  font-weight: lighter;
`;

export default PortfolioTitle;
