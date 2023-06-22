import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Seperator from "../Components/Seperator";
import ProfileField from "../Components/ProfileField";

export default function Profile() {
    return (
        <View style={styles.container}>
            <StatusBar />

            <ProfileField label={"Name "} value={"Cammy White"} icon="name" />

            <Seperator />

            <ProfileField
                label={"Email"}
                value={"123@gmail.com"}
                icon="email"
            />
            <Seperator />

            <ProfileField label={"Phone"} value={"902-222-2222"} icon="phone" />

            <Seperator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
