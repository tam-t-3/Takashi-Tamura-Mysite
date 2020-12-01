import React from "react";
import styled from "styled-components";
import imgProfile from "../../assets/images/me.jpg";

const MyIcon = () => {
  return (
    <div>
      <LayoutImg>
        <ProfileImg src={imgProfile} />
      </LayoutImg>
    </div>
  );
};

const LayoutImg = styled.div`
  text-align: center;
`;

const ProfileImg = styled.img`
  display: inline-block;
  border-radius: 50%;
  width: 240px;
`

export default MyIcon;
