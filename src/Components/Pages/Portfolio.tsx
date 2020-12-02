import React from "react";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Header";
import Project from "../Molecules/project";
import { works } from "../../Constant/projects";
import styled from "styled-components";
import PortfolioTitle from "../Atoms/PortfolioStrings/PortfolioTitle";

const Portfolio = () => {
  const props = works[0];
    return (
      <div>
        <Header />
        <PortfolioTitle />

        <Row>
          <LayoutCol>
            <Project {...props} />
          </LayoutCol>
          <LayoutCol>
            <Project {...props} />
          </LayoutCol>
          <LayoutCol>
            <Project {...props} />
          </LayoutCol>
        </Row>
        <Row>
          <LayoutCol>
            <Project {...props} />
          </LayoutCol>
          <LayoutCol>
            <Project {...props} />
          </LayoutCol>
          <LayoutCol>
            <Project {...props} />
          </LayoutCol>
        </Row>

        <Footer />
      </div>
  );
};

const Row = styled.div`
  display: flex;
  margin: 16px;
`;

const LayoutCol = styled.div`
  margin: 16px;
`;

export default Portfolio;
