import React from "react"
import { Button } from "../src/components/button"
import renderer from "react-test-renderer"

test("button has onPress fn", () => {
  let x = 0
  const buttonInstance = renderer.create(<Button onPress={() => x++} />).getInstance()
  expect(buttonInstance.props.onPress).toBeDefined()
  expect(x).toBe(0)
  buttonInstance.props.onPress()
  expect(x).toBe(1)
})

test("Button shape has not changed", () => {
  const snapshot = renderer.create(<Button />).toJSON()
  expect(snapshot).toMatchSnapshot()
})

test("Button bg is grey on clear prop", () => {
  const snapshotClear = renderer.create(<Button clear />).toJSON()
  expect(snapshotClear).toMatchSnapshot()
})
