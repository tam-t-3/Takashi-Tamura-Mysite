import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import MenuBar from "./MenuBar";
import NavLink from "../LinkAnimation";
import { navigation } from "../../../Constant/strings";

const TriggerMenu: React.FC = ({}) => {
  const [isActive, setActive] = useState(false);
  return (
    <S.Layout>
      <S.Trigger onClick={() => setActive(!isActive)}>
        <MenuBar isActive={isActive} index={0} />
        <MenuBar isActive={isActive} index={1} />
        <MenuBar isActive={isActive} index={2} />
      </S.Trigger>

      {isActive && (
        <div>
          <S.StyledLi>
            <Link to="/">
              <NavLink>{navigation.top}</NavLink>
            </Link>
          </S.StyledLi>

          <S.StyledLi>
            <Link to="/portfolio">
              <NavLink>{navigation.portfolio}</NavLink>
            </Link>
          </S.StyledLi>

          <a href="mailto:takashi.t.abc.20@gmail.com">
            <S.StyledLi>
              <NavLink>{navigation.contact}</NavLink>
            </S.StyledLi>
          </a>
        </div>
      )}
    </S.Layout>
  );
};

export default TriggerMenu;
