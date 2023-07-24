import React from "react";
import { Meta, Story } from "@storybook/react";
import { GridList, GridListProps } from "../../app/Components/GridList";

export default {
  title: "Components/GridList",
  component: GridList,
  parameters: {
    componentSubtitle: "A responsive grid list component.",
  },
} as Meta;

const Template: Story<GridListProps> = (args) => <GridList {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div className="bg-gray-200 p-4">Item 1</div>
      <div className="bg-gray-200 p-4">Item 2</div>
      <div className="bg-gray-200 p-4">Item 3</div>
      <div className="bg-gray-200 p-4">Item 4</div>
      <div className="bg-gray-200 p-4">Item 5</div>
      <div className="bg-gray-200 p-4">Item 6</div>
    </>
  ),
};

export const CustomGrid = Template.bind({});
CustomGrid.args = {
  children: (
    <>
      <div className="bg-red-200 p-4">Custom Item 1</div>
      <div className="bg-green-200 p-4">Custom Item 2</div>
      <div className="bg-blue-200 p-4">Custom Item 3</div>
      <div className="bg-yellow-200 p-4">Custom Item 4</div>
      <div className="bg-blue-200 p-4">Custom Item 5</div>
      <div className="bg-yellow-200 p-4">Custom Item 6</div>
    </>
  ),
};
