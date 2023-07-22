import React from "react";
import { Meta, Story } from "@storybook/react";
import { TextInput, TextInputProps } from "../app/Components/Input/InputText";

export default {
  title: "Components/Input/TextInput",
  component: TextInput,
  parameters: {
    componentSubtitle: "A custom input component for generic text input.",
  },
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "textInputId",
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  id: "textInputId",
  initialValue: "Hello, World!",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "textInputId",
  isDisabled: true,
};
