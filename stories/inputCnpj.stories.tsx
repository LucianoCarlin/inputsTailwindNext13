import React from "react";
import { Meta, Story } from "@storybook/react";
import { CnpjInput, CnpjInputProps } from "../app/Components/Input/InputCnpj";

export default {
  title: "Components/Input/CnpjInput",
  component: CnpjInput,
  parameters: {
    componentSubtitle:
      "A custom input component for entering CNPJ (Brazilian company tax ID).",
  },
} as Meta;

const Template: Story<CnpjInputProps> = (args) => <CnpjInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "cnpjInputId",
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  id: "cnpjInputId",
  initialValue: "12345678901234",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "cnpjInputId",
  isDisabled: true,
};
