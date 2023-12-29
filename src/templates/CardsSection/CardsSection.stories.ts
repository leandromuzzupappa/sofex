import type { Meta, StoryObj } from "@storybook/react";
import { CardsSection } from "./CardsSection";
import { aboutData } from "@data/static/about";

const meta = {
  title: "Templates/CardsSection",
  component: CardsSection,
  parameters: {
    text: "Oreos",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CardsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "La esencia de Sofexs",
    description:
      "Nuestra historia es un testimonio de dedicación y pasión por la excelencia",
    cards: aboutData,
  },
};
