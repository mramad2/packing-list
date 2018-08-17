import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native"
import { Subscribe } from "unstated"
import { RootStore } from "../app/root-component"
/*
  STEP EIGHT
  • Manage state with Unstated (https://github.com/jamiebuilds/unstated)
*/

export class PackingListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Packing List",
      headerRight: (
        <Text style={{ marginRight: 10 }} onPress={() => navigation.navigate("Input")}>
          Input
        </Text>
      )
    }
  }

  listItems(item, index, store) {
    const backgroundColor = item.checked ? "dodgerblue" : "indigo"
    return (
      <TouchableOpacity
        onPress={() => store.checkItem(item, store)}
        style={[styles.itemWrapper, { backgroundColor }]}
        key={index}
      >
        <Text style={styles.item}>{item.name.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const AppContext = React.createContext()
    return <AppContext.Consumer>{store => alert(store)}</AppContext.Consumer>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  list: {
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgray"
  },
  listContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "white"
  },
  itemWrapper: {
    flex: 1,
    margin: 2,
    justifyContent: "center"
  },
  item: {
    margin: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "bisque",
    alignSelf: "center"
  }
})
