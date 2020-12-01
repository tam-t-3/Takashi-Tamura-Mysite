import React from "react";
import styled from "styled-components";

type Props = {
  src: string;
  alt?: string;
};

const LiquidImg: React.FC<Props> = ({ src, alt }) => {
  return <StyledImg src={src} alt={alt} />;
};

const StyledImg = styled.img`
  max-width: 100%;
  width: 100%;
`;

export default LiquidImg;
