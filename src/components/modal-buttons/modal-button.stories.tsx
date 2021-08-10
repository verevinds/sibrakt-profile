import React from "react";
import { Story, Meta } from "@storybook/react";

import ModalButtons, { ModalButtonProps } from "./modal-button";

export default {
  title: "Modal /Buttons",
  component: ModalButtons,
  argTypes: {
    alignContent: {
      control: {
        type: "radio",
        options: ["center", undefined],
      },
    },
  },
} as Meta;

const Template: Story<ModalButtonProps> = (args) => (
  <ModalButtons {...args}>
    <button>Test button #1</button>
    <button>Test button #2</button>
    <button>Test button #3</button>
  </ModalButtons>
);

export const Default = Template.bind({});
Default.args = {
};
