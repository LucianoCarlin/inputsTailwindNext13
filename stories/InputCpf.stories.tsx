import React from "react";
import { Meta, Story } from "@storybook/react";
import { CpfInput, CpfInputProps } from "../app/Components/Input/InputCpf";

export default {
  title: "Components/Input/CpfInput",
  component: CpfInput,
  parameters: {
    componentSubtitle:
      "A custom input component for entering CPF (Brazilian individual tax ID).",
  },
} as Meta;

const Template: Story<CpfInputProps> = (args) => <CpfInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "cpfInputId",
  label: "CPF",
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  id: "cpfInputId",
  label: "CPF",
  initialValue: "12345678901",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "cpfInputId",
  label: "CPF",
  isDisabled: true,
};
