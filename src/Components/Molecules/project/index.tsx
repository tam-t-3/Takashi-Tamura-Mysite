import React from "react";
import styled from "styled-components";
import LiquidImg from "../../Atoms/LiquidImg";

type Props = {
  title: string;
  description: string;
  thumb: string;
  url: string;
  github: string;
};

const Project: React.FC<Props> = ({
  title,
  description,
  thumb,
  url,
  github,
}) => {
  return (
    <>
      <Layout href={url} target="_blank" style={{ color: "black" }}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LiquidImg src={thumb} />
      </Layout>
      <A href={github} target="_blank">
        {github}
      </A>
    </>
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

const A = styled.a`
  color: black;
`;

export default Project;
