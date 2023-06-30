import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useFormikContext } from "formik";
import { FirstRunValues } from "../../customTypes";
import Errors from "../Errors";

export default function Step2() {
    const { values, errors, handleChange, handleBlur } =
        useFormikContext<FirstRunValues>();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Password</Text>

            <TextInput
                onChangeText={handleChange("password")}
                autoCapitalize="words"
                value={values.password}
                style={styles.input}
                //TODO: add this when app is live, leaving it out for ease of use during building/testing
                // secureTextEntry={true}
            ></TextInput>

            <Errors errorMessage={errors.password} />

            <Text style={styles.header}> Confirm Password</Text>

            <TextInput
                onChangeText={handleChange("confirmPassword")}
                autoCapitalize="words"
                value={values.confirmPassword}
                style={styles.input}
                //TODO: add this when app is live, leaving it out for ease of use during building/testing
                // secureTextEntry={true}
            ></TextInput>

            <Errors errorMessage={errors.confirmPassword} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: "25%",
    },
    header: {
        fontSize: 14,
        fontWeight: "400",
        paddingTop: "7%",
        marginLeft: "11%",
    },
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        height: 40,
        padding: 10,
        borderRadius: 4,
        marginVertical: "3%",
        marginHorizontal: "12%",
    },
});
