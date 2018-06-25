import React, { Component } from "react"
import { PackingListScreen } from "../screens/packing-list-screen"
import { InputScreen } from "../screens/input-screen"
import { createBottomTabNavigator, createStackNavigator } from "react-navigation"
import { Provider, Container } from "unstated"
import { Text, View } from "react-native"

const RootStack = createBottomTabNavigator(
  {
    Home: createStackNavigator(
      { PackingListScreen },
      {
        navigationOptions: () => ({
          title: "Packing List"
        })
      }
    ),
    Input: createStackNavigator(
      { InputScreen },
      {
        navigationOptions: () => ({
          title: "ADD ITEM"
        })
      }
    )
  },
  {
    initialRouteName: "Home",
    navigationOptions: ({ navigation, focused }) => ({
      tabBarOptions: {
        labelStyle: {
          fontSize: 16,
          bottom: 12
        }
      },
      title: "Header title",
      tabBarLabel: ({ focused, tintColor }) => {
        return (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              backgroundColor: focused ? "royalblue" : "transparent"
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: focused ? "800" : "100",
                color: focused ? "white" : "black"
              }}
            >
              {navigation.state.routeName}
            </Text>
          </View>
        )
      }
    })
  }
)

export class RootStore extends Container {
  state = {
    items: [],
    inputValue: null
  }

  handleInput = value => {
    this.setState({
      ...this.state,
      inputValue: value
    })
  }

  addItem = () => {
    const { items, inputValue } = this.state
    const newItems = items.concat(inputValue)
    this.setState({
      items: newItems,
      inputValue: null
    })
  }

  clearItems = () => {
    this.setState({
      items: [],
      inputValue: null
    })
  }

  checkItem = selected => {
    const newItems = this.state.items.filter(item => item !== selected)
    this.setState({ items: newItems })
  }
}

export default class RootComponent extends Component {
  render() {
    const rootStore = new RootStore()
    return (
      <Provider inject={[rootStore]}>
        <RootStack />
      </Provider>
    )
  }
}
