import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import "@assets/styles/global.css";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    text: "Pepitos",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Roboto: Story = {
  args: {
    text: "Pepitos",
  },
};
