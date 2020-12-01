import React, { Children } from "react";
import styled from "styled-components";

const FadeInAnim: React.FC = (Children) => {
  return (
  <FadeInTxt className="fade-in">{Children}</FadeInTxt>
  )
};

const FadeInTxt = styled.p`
  .fade-in{
    font-size: 40px;
    opacity: 0;
    animation-name: sample01;
    animation-duration: 5s;
    animation-fill-name: forwords;
  }
  @keyframes sample01 {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    50%{
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(30px);
    }
  }
`;

export default FadeInAnim;