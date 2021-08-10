import React from "react";
import { Story, Meta } from "@storybook/react";

import CheckPlaceholder from "../../../icons/check-placeholder";
import Modal, { ModalProps } from "./modal";
import ModalButtons from "../../atoms/modal-buttons";

export default {
  title: "Modal /Modal",
  component: Modal,
  args: {
    isOpen: true,
    title: "Example of a Title text",
    alignContent: true,
  },
  argTypes: {
    onRequestClose: { action: "clicked" },
    onAfterOpen: { action: "after" },
    Icon: {},
    contentClassName: {
      control: {
        type: 'text'
      }
    }
  },
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
      quisquam dolorem, temporibus inventore expedita asperiores optio
      doloribus! Dolores fugit earum debitis iure, placeat quod praesentium
      sapiente voluptates ipsam blanditiis quibusdam?
    </p>
    <ModalButtons alignContent="center">
      <button>Test button #1</button>
      <button>Test button #2</button>
      <button>Test button #3</button>
    </ModalButtons>
  </Modal>
);

export const Default = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
  Icon: CheckPlaceholder,
};
