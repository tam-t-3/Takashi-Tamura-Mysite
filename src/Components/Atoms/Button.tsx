import React from "react";

interface Props {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ onClick, text }) => {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
