import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { ListInput } from "../components/list-input"
import { PackingContext } from "../context/packing-context"

export class InputScreen extends React.Component {
  render() {
    return (
      <PackingContext.Consumer>
        {({ items, handleAddPress, clearItems, addItem, handleInput, inputValue }) => (
          <View style={styles.container}>
            <ListInput
              value={inputValue}
              onChangeText={value => handleInput(value)}
              onAddItem={addItem()}
              onClearItems={clearItems()}
            />
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {items.map((item, i) => (
                <Text key={i + item.name} style={styles.theValue}>
                  {item.name}
                </Text>
              ))}
            </View>
          </View>
        )}
      </PackingContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "30%",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  theValue: {
    margin: 10,
    fontSize: 18
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
    fontSize: 12
  }
})
