import type { Meta, StoryObj } from "@storybook/react";
import { CardSmall } from "./CardSmall";
import { IconNames } from "@data/interfaces/Icons";

const meta = {
  title: "Components/CardSmall",
  component: CardSmall,
  parameters: {
    text: "Oreos",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CardSmall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    classList: "",
    color: "teal",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ellipsis: false,
    headline: "Lorem ipsum dolor sit amet",
    icon: IconNames.APPS,
    iconPosition: "left",
  },
};

export const WithEllipsis: Story = {
  args: {
    classList: "",
    color: "green",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. Long lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor ",
    ellipsis: true,
    ellipsisLines: 3,
    ellipsisButtonText: "Ver más",
    headline: "Lorem ipsum dolor sit amet",
    icon: IconNames.APPS,
    iconPosition: "left",
  },
};
