import styled from "styled-components";

// メニューバーのスタイル、外部からの値を渡すことで、動的にスタイルを調整する
export const StyledMenuBar = styled.span<{ transform: string; width: string }>`
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  height: 3px;
  background-color: #000;
  border-radius: 3px;
  &:nth-of-type(1) {
    top: 0;
    transform: ${({ transform }) => transform};
    width: ${({ width }) => width};
  }
  &:nth-of-type(2) {
    top: 10px;
    transform: ${({ transform }) => transform};
    width: ${({ width }) => width};
  }
  &:nth-of-type(3) {
    top: 20px;
    transform: ${({ transform }) => transform};
    width: ${({ width }) => width};
  }
`;
