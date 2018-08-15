import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Button } from "../../../src/components/button"

export class ListInput extends React.Component {
  render() {
    const { value, onChangeText, onAddItem, onClearItems } = this.props
    return (
      <View style={styles.inputRow}>
        <TextInput
          ref={ref => (this.texty = ref)}
          style={styles.input}
          value={value}
          onChangeText={() => onChangeText(value)}
          autoFocus
        />
        <Button text="ADD" onPress={() => onAddItem(this.texty.text)} />
        <Button text="Clear" clear onPress={() => onClearItems()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: "50%",
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 5,
    fontSize: 16
  },
  inputRow: {
    flexDirection: "row"
  }
})
