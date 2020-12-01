import React from "react";
import { navigation } from "../../Constant/strings";
import styled from "styled-components";
import FadeInAnim from "./FadeIn";

const AboutTitle = () => {
  return (
      <Title>{navigation.about}</Title>
  );
};

const Title = styled.h1`
  margin: 50px auto;
  text-align: center;
  letter-spacing: 6px;
`;

export default AboutTitle;
