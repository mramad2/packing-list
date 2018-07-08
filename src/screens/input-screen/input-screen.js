import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { ListInput } from "../../components/list-input"
import { Subscribe } from "unstated"
import { RootStore } from "../../app/root-component"
import { RecentlyAdded } from "../../components/recently-added"
import { CustomNav } from "../../components/custom-nav"

export class InputScreen extends React.Component {
  static navigationOptions = () => ({
    header: () => <CustomNav title="INPUT" />
  })

  handleAddPress(store) {
    store.addItem()
  }

  handleClearPress(store) {
    store.clearItems()
  }

  renderInputRow(store) {
    return (
      <ListInput
        value={store.state.inputValue}
        onChangeText={value => store.handleInput(value)}
        onAddItem={() => this.handleAddPress(store)}
        onClearItems={() => this.handleClearPress(store)}
      />
    )
  }

  render() {
    return (
      <Subscribe to={[RootStore]}>
        {store => (
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <RecentlyAdded items={store.state.items} onClear={() => store.clearItems()} />
            </View>
            <View style={styles.bottomContainer}>{this.renderInputRow(store)}</View>
          </View>
        )}
      </Subscribe>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  topContainer: {
    flex: 2.5,
    alignItems: "center",
    paddingTop: 24
  },
  bottomContainer: {
    flex: 4,
    alignItems: "center"
  }
})
