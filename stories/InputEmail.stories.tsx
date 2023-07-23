import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  EmailInput,
  EmailInputProps,
} from "../app/Components/Input/InputEmail";

export default {
  title: "Components/Input/EmailInput",
  component: EmailInput,
  parameters: {
    componentSubtitle: "A custom input component for entering email addresses.",
  },
} as Meta;

const Template: Story<EmailInputProps> = (args) => <EmailInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "emailInputId",
  label: "Email",
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  id: "emailInputId",
  label: "Email",
  initialValue: "example@example.com",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "emailInputId",
  label: "Email",
  isDisabled: true,
};
