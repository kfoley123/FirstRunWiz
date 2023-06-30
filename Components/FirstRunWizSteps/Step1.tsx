import React from "react";
import { StyleSheet, Text, TextInput, SafeAreaView } from "react-native";
import { useFormikContext } from "formik";
import { FirstRunValues, SettingsFormValues } from "../../customTypes";
import Errors from "../Errors";

export default function Step1() {
    const { values, errors, handleChange } = useFormikContext<FirstRunValues>();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}></Text>

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

            <Text style={styles.header}>Phone Number </Text>

            <Text style={styles.caption}>
                Enter phone number in format 555 555 5555
            </Text>

            <TextInput
                onChangeText={handleChange("ProfileValues.phone")}
                keyboardType={"phone-pad"}
                value={values.ProfileValues.phone}
                style={styles.input}
            ></TextInput>

            <Errors errorMessage={errors.ProfileValues?.phone} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: "20%",
    },
    header: {
        fontSize: 14,
        fontWeight: "400",
        paddingVertical: "1%",
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
    caption: { fontSize: 11, textAlign: "center", marginVertical: "1%" },
});
