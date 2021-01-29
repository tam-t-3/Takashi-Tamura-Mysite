import React from "react";
import styled from "styled-components";
import LiquidImg from "../../Atoms/LiquidImg";

type Props = {
  title: string;
  description: string;
  thumb: string;
  url: string;
  githubUrl: string;
  github: string;
};

const Project: React.FC<Props> = ({
  title,
  description,
  thumb,
  url,
  github,
  githubUrl,
}) => {
  return (
    <>
      <Layout href={url} target="_blank" style={{ color: "black" }}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LiquidImg src={thumb} />
      </Layout>
      <P>{github}</P>
      <Github href={githubUrl} target="_blank">
        {githubUrl}
      </Github>
    </>
  );
};

const Layout = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h2`
  color: #262525;
  font-weight: normal;
`;

const Description = styled.p`
  color: #262525;
`;

const P = styled.p`h3`;

const Github = styled.a`
  color: #262525;
`;

export default Project;
