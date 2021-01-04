import React from "react";
import styled from "styled-components";
import { navigation } from "../../../Constant/strings";

interface Props {
  navigation: {
    portfolio: string;
  };
}

const PortfolioTitle: React.FC<Props> = () => {
  return <Title>{navigation.portfolio}</Title>;
};

const Title = styled.h1`
  color: #262525;
  text-align: center;
  margin: 0 auto;
  letter-spacing: 6px;
  padding-top: 128px;
`;

export default PortfolioTitle;
