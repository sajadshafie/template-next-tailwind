import { Meta, StoryObj } from "@storybook/react";
import Slider from ".";

const meta: Meta = {
  component: Slider,
  title: "Components/Core/Slider",
  parameters: {
    deepControls: { enabled: true },
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtype
  args: {
    "containerStyle.width": "200px",
    min: 0,
    max: 100,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const SliderProps: Story = {
  argTypes: {
    valueLabelDisplay: {
      control: { type: "radio" },
      options: ["on", "off", "auto"],
    },
  },
};
