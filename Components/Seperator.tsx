import React from "react";
import { View, ViewStyle } from "react-native";

export default function Seperator() {
    return <View style={seperatorStyles} />;
}

const seperatorStyles: ViewStyle = {
    height: 1,
    width: "100%",
    backgroundColor: "#d3d3d3",
    marginVertical: 10,
};
