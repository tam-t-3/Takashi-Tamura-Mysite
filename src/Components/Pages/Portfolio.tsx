/* eslint @typescript-eslint/ban-ts-comment: 0 */

import React from "react";
import styled, { keyframes } from "styled-components";
import { Helmet } from "react-helmet";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Header";
import Project from "../Molecules/project";
import { works } from "../../Constant/projects";
import PortfolioTitle from "../Atoms/PortfolioStrings/PortfolioTitle";
import { sp, tab, pc } from "../../media";

const Portfolio: React.FC = () => {
  const Population = works[0];
  const props = works[1];
  return (
    <div>
      <Helmet title={`${"Portfolio"}`} />
      <Header />
      <FadeIn>
        {/* @ts-ignore */}
        <PortfolioTitle />

        <LayoutRow>
          <Row>
            <SpBox>
              <LayoutCol>
                <Project {...Population} />
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
      </FadeIn>
      <Footer />
    </div>
  );
};

const Row = styled.div`
  display: flex;
  margin: 16px;
`;

const LayoutRow = styled.div`
  margin-top: 64px;
`;

const LayoutCol = styled.div`
  margin: 16px 48px;
`;

const SpBox = styled.div`
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
        display: none;
    `}
  ${tab`
        display: none;
    `}
    ${pc`
        display: block;
    `}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FadeIn = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

export default Portfolio;
