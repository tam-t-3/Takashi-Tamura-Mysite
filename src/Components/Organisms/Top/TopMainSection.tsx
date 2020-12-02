import React from "react";
import styled from "styled-components";
import TopName from "../../Atoms/TopStrings/TopTitle";
import MyIcon from "../../Atoms/MyPhoto";

const TopMainSection: React.FC = () => {
  return (
    <LayoutMain>

      <TopName />

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
  margin-top: 128px;
`

export default TopMainSection;
