import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import Button from "../../../components/Button/Button";

describe("Button 컴포넌트 테스트", () => {
  it("버튼 렌더링 확인", () => {
    render(<Button>button</Button>);
    const button = screen.getByText("button");

    expect(button).toBeInTheDocument();
  });

  it("버튼 텍스트 확인", () => {
    render(<Button>button</Button>);
    const button = screen.getByText("button");

    expect(button).toBeInTheDocument();
  });

  it("버튼 클릭 이벤트 확인", () => {
    let count = 0;
    const handleClick = jest.fn(() => {
      count += 1;
    });
    render(<Button onClick={handleClick}>button</Button>);
    const button = screen.getByText("button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(count).toBe(1);
  });

  it("버튼 비활성화 확인", () => {
    let count = 0;
    const handleClick = jest.fn(() => {
      count += 1;
    });
    render(
      <Button variant="disabled" onClick={handleClick}>
        button
      </Button>,
    );
    const button = screen.getByText("button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(count).toBe(0);
  });
});
