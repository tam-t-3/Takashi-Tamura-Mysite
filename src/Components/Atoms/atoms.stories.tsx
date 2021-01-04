import React from "react";
import { action } from "@storybook/addon-actions"; // eslint-disable-line import/no-extraneous-dependencies
import { withKnobs } from "@storybook/addon-knobs"; // eslint-disable-line import/no-extraneous-dependencies
import Button from "./Button";

export default {
  title: "atoms",
  component: Button,
  decorators: [withKnobs],
};

type Props = {
  onClick: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

export const Buttons: React.FC<Props> = () => (
  <Button onClick={action("clicked")} text="Button" />
);
