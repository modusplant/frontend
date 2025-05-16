import Input from "@/components/Input/Input";
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
      options: ["regular", "focus", "error", "success", "disabled"],
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
    label: { control: "text" },
    message: { control: "text" },
    disabled: { control: "boolean" },
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
    label: "이메일",
    placeholder: "이메일을 입력해주세요.",
  },
};

export const Error: Story = {
  render: ControlledTemplate,
  args: {
    label: "이메일",
    placeholder: "이메일을 입력해주세요.",
    status: "error",
    message: "올바른 이메일 형식이 아닙니다.",
  },
};

export const Warning: Story = {
  render: ControlledTemplate,
  args: {
    label: "닉네임",
    placeholder: "닉네임을 입력해주세요.",
    status: "warning",
    message: "warning 상태입니다.",
  },
};

export const Success: Story = {
  render: ControlledTemplate,
  args: {
    label: "이메일",
    placeholder: "입력 성공",
    status: "success",
    message: "인증이 성공했습니다.",
  },
};

export const Disabled: Story = {
  render: ControlledTemplate,
  args: {
    label: "이메일",
    placeholder: "입력 비활성화",
    disabled: true,
  },
};

export const Password: Story = {
  render: ControlledTemplate,
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요.",
    type: "password",
  },
};

export const LayoutNoneTop: Story = {
  render: ControlledTemplate,
  args: {
    placeholder: "위쪽 라운드 없음",
    layout: "noneTop",
  },
};

export const LayoutNoneBottom: Story = {
  render: ControlledTemplate,
  args: {
    placeholder: "아래쪽 라운드 없음",
    layout: "noneBottom",
  },
};
