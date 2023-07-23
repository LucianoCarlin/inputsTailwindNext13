import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  PercentageInput,
  PercentageInputProps,
} from "../app/Components/Input/InputPercent";

export default {
  title: "Components/Input/PercentageInput",
  component: PercentageInput,
  parameters: {
    componentSubtitle: "A custom input component for entering percentages.",
  },
} as Meta;

const Template: Story<PercentageInputProps> = (args) => (
  <PercentageInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "percentageInputId",
  label: "Percentage",
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  id: "percentageInputId",
  label: "Percentage",
  initialValue: "25.00",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "percentageInputId",
  label: "Percentage",
  isDisabled: true,
};
