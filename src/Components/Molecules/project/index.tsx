import React from "react";
import styled from "styled-components";
import LiquidImg from "../../Atoms/LiquidImg";

type Props = {
  title: string;
  description: string;
  thumb: string;
};

const Project: React.FC<Props> = ({ title, description, thumb }) => {
  return (
    <Layout>

      <LiquidImg src={thumb} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      
    </Layout>
  );
};

const Layout = styled.div``;

const Title = styled.h3`
  font-weight: normal;
`;

const Description = styled.p``;

export default Project;
