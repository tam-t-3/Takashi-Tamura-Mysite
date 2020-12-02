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

        <LayoutRow>
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
        </LayoutRow>

        <Footer />
      </div>
  );
};

const Row = styled.div`
  display: flex;
  margin: 16px;
`;

const LayoutRow = styled.div`
  margin-top: 128px;
`;

const LayoutCol = styled.div`
  margin: 16px;
`;

export default Portfolio;
