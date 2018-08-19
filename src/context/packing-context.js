import React from "react"

export const PackingDefaults = {
  items: [
    { name: "nacho", checked: false },
    { name: "burrito", checked: false },
    { name: "hotdog", checked: false }
  ],
  inputValue: null
}

export const PackingContext = React.createContext({ ...PackingDefaults })
