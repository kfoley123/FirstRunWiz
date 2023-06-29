import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { SettingsValues } from "../../customTypes";

export default function Step1() {
    const { values, errors, handleChange } = useFormikContext<SettingsValues>();
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
