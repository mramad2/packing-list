import React, { Component } from "react"
import { PackingListScreen } from "../screens/packing-list-screen"
import { InputScreen } from "../screens/input-screen"
import { createStackNavigator } from "react-navigation"
import { PackingContext, PackingDefaults } from "../context/packing-context"

const RootStack = createStackNavigator(
  {
    Home: PackingListScreen,
    Input: InputScreen
  },
  {
    initialRouteName: "Home"
  }
)

const AppContext = React.createContext()

export class RootStore extends Component {
  state = {
    items: [],
    inputValue: null,
    clearItems: () => this.clearItems,
    setItems: () => this.setItems,
    handleInput: val => this.handleInput(val),
    addItem: () => this.addItem,
    checkItem: item => this.checkItem(item)
  }

  setItems = items => this.setState({ items })

  handleInput = inputValue => this.setState({ inputValue })

  addItem = () => {
    const { items, inputValue } = this.state
    if (inputValue) {
      const newItems = [...items, { name: inputValue, checked: false }]
      this.setState({
        items: newItems,
        inputValue: null
      })
    } else {
      alert("You must enter an item!")
    }
  }

  clearItems = () => {
    this.setState({
      items: [],
      inputValue: null
    })
  }

  checkItem = selectedItem => {
    const selectedName = selectedItem.name
    const newItems = this.state.items.map(item => {
      const { name, checked } = item
      return name === selectedName ? { name: name, checked: !checked } : item
    })
    this.setState({ items: newItems })
  }

  render() {
    return (
      <PackingContext.Provider value={this.state}>
        <RootStack />
      </PackingContext.Provider>
    )
  }
}

export default class RootComponent extends Component {
  render() {
    return <RootStore />
  }
}
