import * as React from "react"
import renderer from "react-test-renderer"
import { render, screen } from '../../../utils/test-utils'
import '@testing-library/jest-dom'

import { MenuOption } from "../MenuList"


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
