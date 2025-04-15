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

  it("renders with error status", () => {
    render(<Input status="error" placeholder="이메일 입력" />);
    const input = screen.getByPlaceholderText("이메일 입력");
    expect(input).toHaveClass("border-interaction-error");
  });

  it("disables input when status is disabled", () => {
    render(<Input status="disabled" placeholder="입력 비활성화" />);
    expect(screen.getByPlaceholderText("입력 비활성화")).toBeDisabled();
  });

  it("toggles password visibility", () => {
    render(<Input type="password" placeholder="비밀번호 입력" />);
    const button = screen.getByRole("button");
    const input = screen.getByPlaceholderText("비밀번호 입력") as HTMLInputElement;

    expect(input.type).toBe("password");

    fireEvent.click(button);
    expect(input.type).toBe("text");

    fireEvent.click(button);
    expect(input.type).toBe("password");
  });
});
