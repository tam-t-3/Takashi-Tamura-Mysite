/* eslint @typescript-eslint/ban-ts-comment: 0 */

import React from "react";
import styled, { keyframes } from "styled-components";
import TopTitle from "../../Atoms/TopStrings/TopTitle";
import MyIcon from "../../Atoms/MyPhoto";

const TopMainSection: React.FC = () => {
  return (
    <LayoutMain>
      <FadeIn>
        {/* @ts-ignore */}
        <TopTitle />
      </FadeIn>

      <LayoutMyIcon>
        <MyIcon />
      </LayoutMyIcon>
    </LayoutMain>
  );
};

const LayoutMain = styled.div`
  padding-top: 217px;
`;

const LayoutMyIcon = styled.div`
  margin-top: 64px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const FadeIn = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

export default TopMainSection;
