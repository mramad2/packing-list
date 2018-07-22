import React, { Component } from "react"
import { PackingListScreen } from "../screens/packing-list-screen"
import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation"
import { Text } from "react-native"

const DrawerStack = createBottomTabNavigator(
  {
    Home: PackingListScreen,
    Input: PackingListScreen
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeBackgroundColor: "orange",
      inactiveBackgroundColor: "yellow"
    }
  }
)

export default class RootComponent extends Component {
  render() {
    return <DrawerStack />
  }
}
