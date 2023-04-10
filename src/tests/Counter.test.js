// import necessary react testing library helpers here
// import the Counter component here
import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const welcomeMessage = screen.getByText('Counter');
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = Number(screen.getByTestId("count").textContent);
  expect(count).toEqual(0);
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  const prevCount = Number(screen.getByTestId("count").textContent);
  const increment = screen.getByRole("button", {name: '+'});
  fireEvent.click(increment);
  const newCount = Number(screen.getByTestId("count").textContent);
  expect(newCount).toEqual(prevCount + 1);
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  const prevCount = Number(screen.getByTestId("count").textContent);
  const decrement = screen.getByRole("button", {name: '-'});
  fireEvent.click(decrement);
  const newCount = Number(screen.getByTestId("count").textContent);
  expect(newCount).toEqual(prevCount - 1);
  // Complete the unit test below based on the objective in the line above
});
