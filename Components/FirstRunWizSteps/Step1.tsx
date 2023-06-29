import React from "react";
import { StyleSheet, Text, TextInput, SafeAreaView } from "react-native";
import { useFormikContext } from "formik";
import { FirstRunValues, SettingsFormValues } from "../../customTypes";
import Errors from "../Errors";
import Seperator from "../Seperator";

export default function Step1() {
    const { values, errors, handleChange } = useFormikContext<FirstRunValues>();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Name</Text>

            <TextInput
                onChangeText={handleChange("ProfileValues.name")}
                autoCapitalize="words"
                value={values.ProfileValues.name}
                style={styles.input}
            ></TextInput>

            <Errors errorMessage={errors.ProfileValues?.name} />

            <Text style={styles.header}>Email </Text>

            <TextInput
                onChangeText={handleChange("ProfileValues.email")}
                autoCapitalize="words"
                value={values.ProfileValues.email}
                style={styles.input}
            ></TextInput>

            <Errors errorMessage={errors.ProfileValues?.email} />

            <Text style={styles.header}>Password</Text>

            <TextInput
                onChangeText={handleChange("password")}
                autoCapitalize="words"
                value={values.password}
                style={styles.input}
            ></TextInput>

            <Errors errorMessage={errors.password} />

            <Text style={styles.header}> Confirm Password</Text>

            <TextInput
                onChangeText={handleChange("confirmPassword")}
                autoCapitalize="words"
                value={values.confirmPassword}
                style={styles.input}
            ></TextInput>

            <Errors errorMessage={errors.confirmPassword} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: "1%",
    },
    header: {
        fontSize: 16,
        fontWeight: "500",
        paddingVertical: "2%",
        textAlign: "center",
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
