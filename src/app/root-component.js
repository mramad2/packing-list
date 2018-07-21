import React, { Component } from "react"
import { PackingListScreen } from "../screens/packing-list-screen"
import { createStackNavigator, createDrawerNavigator } from "react-navigation"
import { Text } from "react-native"

const DrawerStack = createDrawerNavigator(
  {
    screen1: createStackNavigator({
      Home: {
        screen: PackingListScreen,
        navigationOptions: ({ navigation }) => ({
          title: `Nav Title`,
          headerLeft: (
            <Text style={{ marginLeft: 10 }} onPress={() => navigation.toggleDrawer()}>
              HEY
            </Text>
          )
        })
      }
    })
  },
  { drawerWidth: 250 }
)

export default class RootComponent extends Component {
  render() {
    return <DrawerStack />
  }
}
