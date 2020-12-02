import React from "react";
import Project from "../../Molecules/project";
import { works } from "../../../Constant/projects";
import styled from "styled-components";
import PortfolioTitle from "../../Atoms/PortfolioStrings/PortfolioTitle";

const Portfolio = () => {
  const props = works[0];
  return (
    <PortfolioDiv>
      
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
        
    </PortfolioDiv>
  );
};

const PortfolioDiv = styled.div`
  margin: 32px 64px;
`;

const Row = styled.div`
  display: flex;
  margin: 16px;
`;

const LayoutCol = styled.div`
  margin: 16px;
`;

export default Portfolio;
