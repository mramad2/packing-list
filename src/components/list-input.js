import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Button } from "./button"
import { colors } from "../theme/colors"

export class ListInput extends React.Component {
  constructor(props) {
    super(props)
    this.listener = props.navigation.addListener("didFocus", () => this.input.focus())
  }

  componentWillUnmount() {
    this.listener.remove()
  }

  handleAddItem = () => this.props.onAddItem()

  render() {
    const { value, onChangeText } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            ref={ref => (this.input = ref)}
            style={styles.input}
            value={value}
            onChangeText={val => onChangeText(val)}
            onSubmitEditing={this.handleAddItem}
            returnKeyType="done"
            placeholder="Enter Item"
            placeholderTextColor={colors.rainCloud}
            blurOnSubmit={false}
          />
        </View>
        <Button text="Add item to List" onPress={this.handleAddItem} active={value} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%"
  },
  inputContainer: {
    height: 48,
    marginBottom: 20
  },
  input: {
    flex: 1,
    borderColor: colors.clay,
    borderBottomWidth: 2,
    fontSize: 16,
    fontWeight: "300"
  }
})
