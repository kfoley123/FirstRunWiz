import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { FirstRunValues } from "../../customTypes";
import Errors from "../Errors";

export default function Step2() {
    const { values, errors, handleChange } = useFormikContext<FirstRunValues>();
    return (
        <View>
            <Text style={styles.header}>Business Name</Text>

            <Text style={styles.sectionInfoOpen}>
                The name of your business as it will appear to your clients.
            </Text>

            <TextInput
                onChangeText={handleChange("SettingsValues.businessName")}
                autoCapitalize="words"
                value={values.SettingsValues.businessName}
                style={styles.input}
            ></TextInput>

            <Errors errorMessage={errors.SettingsValues?.businessName} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: "1%",
    },
    header: {
        fontSize: 16,
        fontWeight: "500",
        paddingTop: "33%",
        paddingBottom: "4%",
        textAlign: "center",
    },
    sectionInfoOpen: { paddingHorizontal: "6%" },
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        height: 40,
        padding: 10,
        borderRadius: 4,
        marginVertical: "5%",
        marginHorizontal: "12%",
    },
});
