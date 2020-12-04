import React from "react";
import * as S from "./style";

type Props = {
  isActive: boolean;
  index: number;
};

// メニューバーの描画
const MenuBar: React.FC<Props> = ({ isActive, index }) => {
  const props = isActive ? after[index] : before[index];
  return <S.StyledMenuBar {...props} />;
};

const after: { transform: string; width: string }[] = [
  { transform: "translate3d(1px, 5px, 0) rotate(405deg);", width: "45%" },
  { transform: "translate3d(-1px, 0, 0) rotate(-45deg);", width: "26px" },
  { transform: "translate3d(11px, -5px, 0) rotate(405deg);", width: "45%" },
];

const before = [
  { transform: "translate3d(0px, 0px, 0px) rotate(0);", width: "100%" },
  { transform: "translate3d(0px, 0px, 0px) rotate(0);", width: "100%" },
  { transform: "translate3d(0px, 0px, 0px) rotate(0);", width: "100%" },
];

export default MenuBar;
