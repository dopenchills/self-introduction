import * as React from "react"
import renderer from "react-test-renderer"
import * as Gatsby from "gatsby"
import {cleanup, fireEvent, render} from '@testing-library/react'

import { MenuOption } from "../MenuList"

describe(`MenuOption`, () => {
  it(`has the same snapshot`, () => {
    const component = renderer.create(
      <MenuOption name="menu" value="portfolio" label={"portfolio".toUpperCase()} checked={true} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
