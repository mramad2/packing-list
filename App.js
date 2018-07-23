import React, { Component } from "react"
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native"

/*
  FETCH
  • Let's get some rates
  • What about transforms?
*/

export default class App extends Component {
  state = {
    exchangeRates: []
  }

  transformRates(rates) {
    const pairs = Object.entries(rates)
    const exchangeRates = pairs.map(rate => {
      return { symbol: rate[0], value: rate[1] }
    })
    this.setState({ exchangeRates })
  }

  getRates() {
    fetch("https://exchangeratesapi.io/api/latest", {
      method: "get"
      // Optional Headers ⬇️
      // headers: {
      // Accept: "application/json",
      // "Content-Type": "application/json"
      // }
    })
      .then(resp => resp.json())
      // .then(data => console.log("DATA", data))
      .then(data => this.transformRates(data.rates))
      .catch(err => console.log("NO TACOS", err))
  }

  render() {
    const { exchangeRates } = this.state
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ top: 50, backgroundColor: "lightgreen", padding: 10, alignItems: "center" }}
            onPress={() => this.getRates()}
          >
            <Text>GET EXCHANGE RATES</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{ flex: 1, backgroundColor: "lightgray" }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {exchangeRates.map((rate, i) => {
            return (
              <Text key={i} style={{ padding: 5 }}>
                {rate.symbol}: {rate.value}
              </Text>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
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
