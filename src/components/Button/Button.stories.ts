import Button, { ButtonProps } from "@/components/Button/Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["fill", "outline", "ghost", "disabled"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: "default button",
  },
};

export const FillSmall: StoryObj<ButtonProps> = {
  args: {
    variant: "fill",
    size: "small",
    children: "button",
  },
};

export const FillMedium: StoryObj<ButtonProps> = {
  args: {
    variant: "fill",
    size: "medium",
    children: "button",
  },
};

export const FillLarge: StoryObj<ButtonProps> = {
  args: {
    variant: "fill",
    size: "large",
    children: "button",
  },
};

export const OutlineSmall: StoryObj<ButtonProps> = {
  args: {
    variant: "outline",
    size: "small",
    children: "button",
  },
};

export const OutlineMedium: StoryObj<ButtonProps> = {
  args: {
    variant: "outline",
    size: "medium",
    children: "button",
  },
};

export const OutlineLarge: StoryObj<ButtonProps> = {
  args: {
    variant: "outline",
    size: "large",
    children: "button",
  },
};

export const GhostSmall: StoryObj<ButtonProps> = {
  args: {
    variant: "ghost",
    size: "small",
    children: "button",
  },
};

export const GhostMedium: StoryObj<ButtonProps> = {
  args: {
    variant: "ghost",
    size: "medium",
    children: "button",
  },
};

export const GhostLarge: StoryObj<ButtonProps> = {
  args: {
    variant: "ghost",
    size: "large",
    children: "button",
  },
};

export const DisabledSmall: StoryObj<ButtonProps> = {
  args: {
    variant: "disabled",
    size: "small",
    children: "button",
  },
};

export const DisabledMedium: StoryObj<ButtonProps> = {
  args: {
    variant: "disabled",
    size: "medium",
    children: "button",
  },
};

export const DisabledLarge: StoryObj<ButtonProps> = {
  args: {
    variant: "disabled",
    size: "large",
    children: "button",
  },
};
