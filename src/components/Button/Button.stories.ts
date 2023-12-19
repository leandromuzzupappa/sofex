import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import "@assets/styles/variables.css";
import "@assets/styles/global.css";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    text: "Surtidas",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Surtidas",
  },
};
