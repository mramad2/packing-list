import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, FlatList, AsyncStorage } from "react-native"
import { ListInput } from "../../components/list-input"
import { Subscribe } from "unstated"
import { RootStore } from "../../app/root-component"
import { colors } from "../../theme/colors"
import { CustomNav } from "../../components/custom-nav"
/*
  STEP TEN
  • Manage state with Unstated (https://github.com/jamiebuilds/unstated)
  • Persist data with AsyncStorage in root-component exercise <==
  • Convert packing-list-screen & input-screen → Tabs Navigator
*/

export class PackingListScreen extends React.Component {
  static navigationOptions = () => ({
    header: () => <CustomNav title="PACKING LIST" />
  })

  listItems(item, index, store) {
    const { checked, name } = item
    const { rainCloud, pureWhite, slate, dim } = colors
    const backgroundColor = item.checked ? rainCloud : pureWhite
    return (
      <TouchableOpacity
        onPress={() => store.checkItem(item, store)}
        style={[styles.itemWrapper, { backgroundColor }]}
        key={index}
      >
        <Text
          textDecorationLine={checked ? "line-through" : "none"}
          style={[styles.item, { color: checked ? dim : slate }]}
        >
          {name}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { navigation } = this.props
    const items = navigation.getParam("items", [])
    return (
      <Subscribe to={[RootStore]}>
        {store => (
          <View style={styles.container}>
            <FlatList
              data={store.state.items}
              keyExtractor={item => item}
              renderItem={({ item, index }) => this.listItems(item, index, store)}
              contentContainerStyle={styles.listContainer}
              style={styles.list}
              numColumns={3}
            />
          </View>
        )}
      </Subscribe>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  list: {
    padding: 20
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.background
  },
  itemWrapper: {
    flex: 1,
    margin: 4,
    borderRadius: 4,
    height: 48,
    justifyContent: "center"
  },
  item: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center"
  }
})
