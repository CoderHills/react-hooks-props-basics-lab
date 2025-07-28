import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // <-- Add this line
import App from "../App";
import user from "../data/user";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("passes 'name', 'city', and 'color' to <Home> as props", () => {
  render(<App />);
  const h1 = screen.getByText(`${user.name} is a Web Developer from ${user.city}`);
  expect(h1).toBeInTheDocument();
  expect(h1.style.color).toEqual(user.color);
});

test("passes 'bio' to <About> as a prop", () => {
  render(<App />);
  expect(screen.getByText(user.bio)).toBeInTheDocument();
});
