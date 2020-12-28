import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Button from "./Button";

export default {
  title: "atoms",
  component: Button,
  decorators: [withKnobs],
};

export const Buttons = () => (
  // @ts-ignore
  <Button onClick={action("clicked")} text="Button" />
);
