import React from "react";
import { aboutTxt } from "../../../Constant/strings";
import styled from "styled-components";

const TopTitle = () => {
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
  font-size: 20px;
`;

export default TopTitle;
