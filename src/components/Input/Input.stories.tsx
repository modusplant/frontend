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
      options: ["regular", "error", "warning", "valid", "disabled"],
    },
    type: {
      control: "select",
      options: ["text", "password", "email"],
    },
    placeholder: { control: "text" },
    hint: { control: "text" },
    errorMsg: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const ControlledTemplate = (args: InputHTMLAttributes<HTMLInputElement>) => {
  const [value, setValue] = useState("");
  return <Input {...args} value={value} onChange={e => setValue(e.target.value)} />;
};

export const Regular: Story = {
  render: ControlledTemplate,
  args: {
    placeholder: "이메일 입력",
  },
};

export const Active: Story = {
  render: ControlledTemplate,
  args: {
    status: "active",
    placeholder: "이메일 입력",
  },
};

export const Hover: Story = {
  render: ControlledTemplate,
  args: {
    status: "hover",
    placeholder: "이메일 입력",
  },
};

export const WithError: Story = {
  render: ControlledTemplate,
  args: {
    status: "error",
    errorMsg: "유효하지 않은 이메일입니다",
    placeholder: "이메일 입력",
  },
};

export const WithHint: Story = {
  render: ControlledTemplate,
  args: {
    status: "warning",
    hint: "주의가 필요해요",
    placeholder: "이메일 입력",
  },
};

export const Valid: Story = {
  render: ControlledTemplate,
  args: {
    status: "valid",
    placeholder: "이메일 입력",
  },
};

export const Disabled: Story = {
  render: ControlledTemplate,
  args: {
    status: "disabled",
    placeholder: "입력 비활성화됨",
  },
};

export const PasswordInput: Story = {
  render: ControlledTemplate,
  args: {
    type: "password",
    placeholder: "비밀번호 입력",
  },
};
