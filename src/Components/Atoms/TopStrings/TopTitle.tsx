import React from "react";
import styled from "styled-components";
import { aboutTxt } from "../../../Constant/strings";

interface Props {
  aboutTxt: {
    myname: string;
  };
}

const TopTitle: React.FC<Props> = () => {
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
  color: #262525;
`;

export default TopTitle;
