import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { Input } from "../../../components/Input/Input";

afterEach(() => {
  cleanup();
});

describe("Input component", () => {
  it("renders a regular input with placeholder", () => {
    render(<Input placeholder="이메일 입력" />);
    const input = screen.getByPlaceholderText("이메일 입력");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("w-full");
  });

  it("displays error message when status is error", () => {
    render(<Input status="error" errorMsg="유효하지 않은 이메일입니다" />);
    expect(screen.getByText("유효하지 않은 이메일입니다")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveClass("border-interaction-error");
  });

  it("displays valid message when status is valid", () => {
    render(<Input status="valid" />);
    const matches = screen.getAllByText((_, el) => el?.textContent === "✅ Valid");
    expect(matches[0]).toBeInTheDocument();
  });

  it("disables input when status is disabled", () => {
    render(<Input status="disabled" />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("toggles password visibility", () => {
    render(<Input type="password" placeholder="비밀번호 입력" />);
    const button = screen.getByRole("button");
    const input = screen.getByPlaceholderText("비밀번호 입력") as HTMLInputElement;

    // 처음엔 password 타입이어야 함
    expect(input.type).toBe("password");

    // 클릭하면 type이 text로 변경
    fireEvent.click(button);
    expect(input.type).toBe("text");

    // 다시 클릭하면 password로
    fireEvent.click(button);
    expect(input.type).toBe("password");
  });

  it("shows hint text when provided and status is warning", () => {
    render(<Input status="warning" hint="주의가 필요해요" />);
    expect(screen.getByText("주의가 필요해요")).toBeInTheDocument();
  });
});
