import React from "react";
import { aboutTxt } from "../../Constant/strings";
import styled from "styled-components";

const TopName = () => {
  return (
    <div>
        <Title>{aboutTxt.myname}</Title>
    </div>
  );
};

const Title = styled.h1`
  text-align: center;
  letter-spacing: 8px;
  margin: 0 auto;
`;

export default TopName;
