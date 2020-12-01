import React from "react";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Header";
import TopTextSection from "../Organisms/Top/TopTextSection";
import TopMainSection from "../Organisms/Top/TopMainSection";

const Top = () => {
  return (
    <div>
      <Header />

      <div className="fade-in">
        <TopMainSection />
        <TopTextSection />
      </div>

      <Footer />

    </div>
  );
};

export default Top;
