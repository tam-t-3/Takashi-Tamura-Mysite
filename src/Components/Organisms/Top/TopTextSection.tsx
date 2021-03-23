import React from "react";
import styled from "styled-components";
import TextAreaComp from "../../Atoms/TopStrings/TextArea";
import { aboutTxt, subTitle } from "../../../Constant/strings";

const TopTextSection: React.FC = () => {
  return (
    <TextSection>
      <Section>
        <h2 className="about-section">{subTitle.about}</h2>
        <ProfileLayout>
          <TextAreaComp>{aboutTxt.profile}</TextAreaComp>
        </ProfileLayout>
      </Section>

      <Section>
        <h2>{subTitle.skills}</h2>
        <InnerSection>
          <InnerTitle>Frontend</InnerTitle>
          <p>{aboutTxt.skill.frontend}</p>
          <InnerTitle>Framework / Library</InnerTitle>
          <p>{aboutTxt.skill.framework}</p>
          <InnerTitle>Backend</InnerTitle>
          <p>{aboutTxt.skill.backend}</p>
          <InnerTitle>Source</InnerTitle>
          <p>{aboutTxt.skill.Source}</p>
          <InnerTitle>Editor</InnerTitle>
          <p>{aboutTxt.skill.editor}</p>
          <InnerTitle>AWS</InnerTitle>
          <p>{aboutTxt.skill.AWS}</p>
          <InnerTitle>Linux</InnerTitle>
          <p>{aboutTxt.skill.Linux}</p>
        </InnerSection>
      </Section>
    </TextSection>
  );
};

const TextSection = styled.div`
  white-space: pre-wrap;
  font-size: 16px;
  max-width: 640px;
  text-align: center;
  margin: 0 auto;
`;

const Section = styled.section`
  & + section {
    margin-top: 48px;
  }

  .about-section {
    margin-top: 48px;
  }
`;

const ProfileLayout = styled.div``;

const InnerSection = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
`;

const InnerTitle = styled.h4`
  margin: 32px 0 8px 0;
`;

export default TopTextSection;
