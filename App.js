import React, { Component } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"

/*
  STEP FOUR
  • Add ability to "check" an item
  • Intro to FlatList
  • Move styled list component to separate function
  • Update local state
*/

export default class App extends Component {
  state = {
    inputValue: null,
    items: [
      { name: "Pickle", checked: false },
      { name: "Carrot", checked: false },
      { name: "Apple", checked: false },
      { name: "Grape", checked: false }
    ]
  }

  // Turn this into an arrow function and hot reloading no longer works
  // Also, this unbound function has access to this.state - how?
  listItems(item, index) {
    const checkItem = selectedItem => {
      const selectedName = selectedItem.name
      const newItems = this.state.items.map(item => {
        const { name, checked } = item
        return name === selectedName ? { name: name, checked: !checked } : item
      })
      this.setState({ items: newItems })
    }

    const backgroundColor = item.checked ? "dodgerblue" : "tomato"
    return (
      <TouchableOpacity
        onPress={() => checkItem(item)}
        style={[styles.itemWrapper, { backgroundColor }]}
        key={index}
      >
        <Text style={styles.item}>{item.name.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { items } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          extraData={{ data: items.length }}
          keyExtractor={item => item}
          renderItem={({ item, index }) => this.listItems(item, index)}
          contentContainerStyle={styles.listContainer}
          style={styles.list}
          numColumns={3}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    justifyContent: "center"
  },
  list: {
    borderWidth: 1,
    borderColor: "lightgray",
    margin: "10%"
  },
  itemWrapper: {
    borderBottomWidth: 1,
    borderColor: "lightgray",
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    margin: 5,
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  }
})
