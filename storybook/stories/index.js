import React from "react"

import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"

import { Button } from "./Button"
import CenterView from "./CenterView"
import { ListInput } from "./ListInput"

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Basic usage", () => <Button onPress={action("Button Pressed")} text="Press Me" />)

storiesOf("ListInput", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Basic usage", () => (
    <ListInput onAddItem={action("Add Item")} onClearItems={action("Clear All Items")} />
  ))
