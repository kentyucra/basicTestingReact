import { render, screen, fireEvent } from '@testing-library/react';
import App, {toTitleCase} from './App';

test('button has correct initial color', () => {
  render(<App />)

  // find an element with a role of button and text of 'Change to midnightblue'
  const colorButton = screen.getByRole('button', {
    name: 'Change to midnightblue'
  })

  // expect to background color to be mediumvioletred
  expect(colorButton).toHaveStyle({
    backgroundColor: 'mediumvioletred'
  })
});

test('button turn midnightblue when clicked', () => {

  render(<App />)

  const colorButton = screen.getByRole('button', {
    name: 'Change to midnightblue'
  })

  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({
    backgroundColor: 'midnightblue'
  })

  expect(colorButton.textContent).toBe('Change to mediumvioletred')

})

test('Initial conditions', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', {
    name: "Change to midnightblue"
  })
  expect(colorButton).toBeEnabled()

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('Add checkbox functinality', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', {
    name: "Change to midnightblue"
  })
  expect(colorButton).toBeEnabled()

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()

  fireEvent.click(checkbox)

  expect(colorButton).not.toBeEnabled()
  expect(checkbox).toBeChecked()

  fireEvent.click(checkbox)
  
  expect(colorButton).toBeEnabled()
  expect(checkbox).not.toBeChecked()
})

test('Button gray when disabled', () => {
  render(<App />)
  const colorButton = screen.getByRole('button')
  const checkbox = screen.getByRole('checkbox')

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({
    backgroundColor: 'gray'
  })

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({
    backgroundColor: 'mediumvioletred'
  }) 

  fireEvent.click(colorButton)
  fireEvent.click(checkbox)

  expect(colorButton).toHaveStyle({
    backgroundColor: 'gray'
  })

  fireEvent.click(checkbox)

  expect(colorButton).toHaveStyle({
    backgroundColor: 'midnightblue'
  })
})

describe('Section to test ToTitleCase', () => {
  test('Test empty string', () => {
    expect(toTitleCase("")).toBe("")
  })

  test('Test with 1 word', () => {
    expect(toTitleCase("pepe")).toBe("Pepe")
  })

  test('Test for many words', () => {
    expect(toTitleCase("bulls vs spurs")).toBe("Bulls Vs Spurs")
  })
})

