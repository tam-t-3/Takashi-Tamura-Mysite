import React from "react";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Header";
import Project from "../Molecules/project";
import { works } from "../../Constant/projects";
import styled from "styled-components";
import PortfolioTitle from "../Atoms/PortfolioStrings/PortfolioTitle";
import { sp, tab, pc } from "../../media";

const Portfolio = () => {
  const props = works[0];
    return (
      <div>
        <Header />
        <PortfolioTitle />

        <LayoutRow>
        <Row>
          <SpBox>
            <LayoutCol>
              <Project {...props} />
            </LayoutCol>
          </SpBox>

          <TabBox>
            <LayoutCol>
              <Project {...props} />
            </LayoutCol>
          </TabBox>

          <PcBox>
            <LayoutCol>
              <Project {...props} />
            </LayoutCol>
          </PcBox>
        </Row>
        <Row>
          <SpBox>
            <LayoutCol>
              <Project {...props} />
            </LayoutCol>
          </SpBox>

          <TabBox>
            <LayoutCol>
              <Project {...props} />
            </LayoutCol>
          </TabBox>

          <PcBox>
            <LayoutCol>
              <Project {...props} />
            </LayoutCol>
          </PcBox>
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

const SpBox = styled.div`
    ${sp`
        display: none;
    `}
    ${tab`
        display: none;
    `}
    ${pc`
        display: block;
    `}
`;

const TabBox = styled.div`
    ${sp`
        display: none;
    `}
    ${tab`
        display: block;
    `}
    ${pc`
        display: block;
    `}
`;

const PcBox = styled.div`
    ${sp`
        display: block;
    `}
    ${tab`
        display: block;
    `}
    ${pc`
        display: block;
    `}
`;

export default Portfolio;
