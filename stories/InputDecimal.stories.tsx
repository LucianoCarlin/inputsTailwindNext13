import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  DecimalInput,
  DecimalInputProps,
} from "../app/Components/Input/InputDecimal";

export default {
  title: "Components/Input/DecimalInput",
  component: DecimalInput,
  parameters: {
    componentSubtitle: "A custom input component for entering decimal values.",
  },
} as Meta;

const Template: Story<DecimalInputProps> = (args) => <DecimalInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "decimalInputId",
  label: "Decimal",
  decimalPlaces: 2,
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  id: "decimalInputId",
  label: "Decimal",
  decimalPlaces: 2,
  initialValue: "1234.56",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "decimalInputId",
  label: "Decimal",
  decimalPlaces: 2,
  isDisabled: true,
};
