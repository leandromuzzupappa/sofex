import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";
import "@assets/styles/global.css";

const meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    text: "Oreos",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Oreos",
  },
};

export const Changa: Story = {
  args: {
    text: "Pepitos",
    font: "changa",
  },
};
