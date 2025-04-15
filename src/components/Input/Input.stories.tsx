import { Input } from "@/components/Input/Input";
import type { Meta, StoryObj } from "@storybook/react";
import type { InputHTMLAttributes } from "react";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["regular", "focus", "error", "disabled"], // 기존 inputVariants에 맞춤
    },
    layout: {
      control: "select",
      options: ["full", "noneTop", "noneBottom"],
    },
    type: {
      control: "select",
      options: ["text", "password", "email"],
    },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const ControlledTemplate = (args: InputHTMLAttributes<HTMLInputElement>) => {
  const [value, setValue] = useState("");
  return <Input {...args} value={value} onChange={e => setValue(e.target.value)} />;
};

export const Default: Story = {
  render: ControlledTemplate,
  args: {
    status: "regular",
    placeholder: "기본 입력",
  },
};

export const Focus: Story = {
  render: ControlledTemplate,
  args: {
    status: "focus",
    placeholder: "포커스 상태",
  },
};

export const Error: Story = {
  render: ControlledTemplate,
  args: {
    status: "error",
    placeholder: "에러 상태",
  },
};

export const Disabled: Story = {
  render: ControlledTemplate,
  args: {
    status: "disabled",
    placeholder: "비활성화 상태",
    disabled: true,
  },
};

export const PasswordInput: Story = {
  render: ControlledTemplate,
  args: {
    type: "password",
    placeholder: "비밀번호 입력",
  },
};

export const NoneTop: Story = {
  render: ControlledTemplate,
  args: {
    layout: "noneTop",
    placeholder: "위쪽 라운드 없음",
  },
};

export const NoneBottom: Story = {
  render: ControlledTemplate,
  args: {
    layout: "noneBottom",
    placeholder: "아래쪽 라운드 없음",
  },
};
