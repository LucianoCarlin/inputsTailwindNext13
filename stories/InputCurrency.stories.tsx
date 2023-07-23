import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  CurrencyInput,
  CurrencyInputProps,
} from "../app/Components/Input/InputCurrency";

export default {
  title: "Components/Input/CurrencyInput",
  component: CurrencyInput,
  parameters: {
    componentSubtitle: "A custom input component for entering currency values.",
  },
} as Meta;

const Template: Story<CurrencyInputProps> = (args) => (
  <CurrencyInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "currencyInputId",
  label: "Currency",
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  id: "currencyInputId",
  label: "Currency",
  initialValue: "1234.56",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "currencyInputId",
  label: "Currency",
  isDisabled: true,
};
