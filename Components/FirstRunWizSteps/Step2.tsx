import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Step2() {
    return (
        <View>
            <Text>Step 1</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
