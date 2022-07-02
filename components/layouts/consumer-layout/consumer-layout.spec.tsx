import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { ConsumerLayout } from "./consumer-layout";

describe("consumer-layout", () => {
  it("renders with a title and a child", () => {
    render(
      <ConsumerLayout title="This is a test">
        <p>I am a paragraph</p>
      </ConsumerLayout>
    );
    const main = screen.getByRole("main");
    const paragraph = screen.getByText(/i am a paragraph/i);
    expect(paragraph).toBeDefined();
    expect(main).toBeDefined();
  });
});
