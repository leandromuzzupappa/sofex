import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import "@assets/styles/variables.css";
import "@assets/styles/global.css";
import { IconNames } from "@data/interfaces/Icons";

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

export const WithIcon: Story = {
  args: {
    text: "Enviar consulta",
    icon: IconNames.RIGHTARROW,
    iconPosition: "right",
    color: "green",
    variant: "outlined",
  },
};

export const Loading: Story = {
  args: {
    text: "Enviando consulta",
    variant: "filled",
    loading: true,
    disabled: true,
  },
};
