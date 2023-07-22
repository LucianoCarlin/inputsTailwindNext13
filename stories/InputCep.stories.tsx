// InputCep.stories.tsx

import { Meta, ComponentStory } from "@storybook/react";
import { CepInput, CepInputProps } from "../app/Components/Input/InputCep";

export default {
  title: "Components/Input/InputCep",
  component: CepInput,
  parameters: {
    componentSubtitle:
      "Um componente de entrada personalizado para inserir CEP.",
  },
} as Meta;

const Template: ComponentStory<typeof CepInput> = (args) => (
  <CepInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "cepInputId",
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  id: "cepInputId",
  initialValue: "12345-678",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "cepInputId",
  isDisabled: true,
};
