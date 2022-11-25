import * as React from "react"
import renderer from "react-test-renderer"
import { fireEvent, render, screen } from '../../../utils/test-utils'
import '@testing-library/jest-dom'

import MenuList, { MenuOption } from "../MenuList"


describe(`MenuOption`, () => {
  const name  = "menu"
  const value = "portfolio"
  const label = value.toUpperCase()

  it(`has the same snapshot`, () => {
    const component = renderer.create(
      <MenuOption name={name} value={value} label={label} checked={true} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`shows label text`, async () => {
    render(<MenuOption name={name} value={value} label={label} checked={false} />)
    expect(screen.getByText(label)).toHaveTextContent(label)
  })
})

describe(`MenuList`, () => {
  it(`has home radio button that is initially checked`, () => {
    render(<MenuList />)
    expect((screen.getByLabelText("HOME") as HTMLInputElement).checked).toBe(true)
    expect((screen.getByLabelText("SKILLS") as HTMLInputElement).checked).toBe(false)
  })

  it(`changed its value with onClick`, () => {
    render(<MenuList />)
    expect((screen.getByLabelText("HOME") as HTMLInputElement).checked).toBe(true)
    expect((screen.getByLabelText("SKILLS") as HTMLInputElement).checked).toBe(false)
    fireEvent.click(screen.getByLabelText("SKILLS"))
    expect((screen.getByLabelText("HOME") as HTMLInputElement).checked).toBe(false)
    expect((screen.getByLabelText("SKILLS") as HTMLInputElement).checked).toBe(true)
  })
})
