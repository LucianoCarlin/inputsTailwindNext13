import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  PasswordInput,
  PasswordInputProps,
} from "../app/Components/Input/InputPassword";

export default {
  title: "Components/Input/PasswordInput",
  component: PasswordInput,
  parameters: {
    componentSubtitle: "A custom input component for entering passwords.",
  },
} as Meta;

const Template: Story<PasswordInputProps> = (args) => (
  <PasswordInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "passwordInputId",
  label: "Password",
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  id: "passwordInputId",
  label: "Password",
  initialValue: "examplePassword",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "passwordInputId",
  label: "Password",
  isDisabled: true,
};
