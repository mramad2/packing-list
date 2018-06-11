import React, { Component } from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"

export default class App extends Component {
  state = {
    inputValue: null
  }

  handleInput = value => {
    this.setState({ inputValue: value })
  }

  render() {
    const { items, inputValue } = this.state
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} value={inputValue} onChangeText={this.handleInput} />
        <Text style={styles.theValue}>{inputValue}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "50%",
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 5
  },
  theValue: {
    margin: 10,
    fontSize: 18
  }
})
