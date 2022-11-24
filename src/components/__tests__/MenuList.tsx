import * as React from "react"
import renderer from "react-test-renderer"
import {render, fireEvent, screen} from '../../../utils/test-utils'
import '@testing-library/jest-dom'

import { MenuOption } from "../MenuList"

describe(`MenuOption`, () => {
  it(`has the same snapshot`, () => {
    const component = renderer.create(
      <MenuOption name="menu" value="portfolio" label={"portfolio".toUpperCase()} checked={true} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`shows label text`, async () => {
    const value = "portfolio"
    const label = value.toUpperCase()
    render(<MenuOption name="menu" value={value} label={label} checked={false} />)
    expect(screen.getByText(label)).toHaveTextContent(label)
  })

  it(`is checked on click`, async () => {
    const value = "portfolio"
    const label = value.toUpperCase()
    render(<MenuOption name="menu" value={value} label={label} checked={false} />)
    fireEvent.click(screen.getByText(label))
    expect(screen.getByLabelText(label)).toBeChecked
  })
})
