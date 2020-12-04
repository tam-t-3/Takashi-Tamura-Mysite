import React from "react";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Header";
import TopTextSection from "../Organisms/Top/TopTextSection";
import TopMainSection from "../Organisms/Top/TopMainSection";
import styled, { keyframes } from "styled-components";

const Top = () => {
  return (
    <div>
      <Header />

      <FadeIn>
        <div className="fade-in">
          <TopMainSection />
          <TopTextSection />
        </div>
      </FadeIn>

      <Footer />
    </div>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FadeIn = styled.div`
  animation: ${fadeIn} 2s ease-in-out;
`;

export default Top;
