import React from "react";
import styled from "styled-components";
import LiquidImg from "../../Atoms/LiquidImg";

type Props = {
  title: string;
  description: string;
  thumb: string;
  url: string;
};

const Project: React.FC<Props> = ({ title, description, thumb, url }) => {
  return (
    <Layout
      href={url}
      target="_blank"
    >

      <Title>{title}</Title>
      <Description>{description}</Description>
      <LiquidImg src={thumb} />
      
    </Layout>
  );
};

const Layout = styled.a`
  text-decolation: none;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h3`
  font-weight: normal;
`;

const Description = styled.p``;

export default Project;
