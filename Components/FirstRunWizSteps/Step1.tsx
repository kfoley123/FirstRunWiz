import React from "react";
import { StyleSheet, Text, TextInput, SafeAreaView } from "react-native";
import { useFormikContext } from "formik";
import { FirstRunValues, SettingsFormValues } from "../../customTypes";
import { formatPhoneNumber } from "../../Helpers/helpers";

export default function Step1() {
    const { values, errors, handleChange, setFieldValue } =
        useFormikContext<FirstRunValues>();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Name</Text>

            <TextInput
                onChangeText={handleChange("name")}
                autoCapitalize="words"
                value={values.name}
                style={styles.input}
            ></TextInput>

            {errors.name ? (
                <Text style={styles.errors}>{errors.name}</Text>
            ) : null}

            <Text style={styles.header}>Email </Text>

            <TextInput
                onChangeText={handleChange("email")}
                autoCapitalize="none"
                value={values.email}
                style={styles.input}
            ></TextInput>

            {errors.email ? (
                <Text style={styles.errors}>{errors.email}</Text>
            ) : null}

            <Text style={styles.header}>Phone Number </Text>

            <TextInput
                onChangeText={(text) =>
                    setFieldValue("phone", formatPhoneNumber(text))
                }
                keyboardType={"phone-pad"}
                value={values.phone}
                style={styles.input}
            ></TextInput>

            {errors.phone ? (
                <Text style={styles.errors}>{errors.phone}</Text>
            ) : null}
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
    errors: {
        color: "red",
        textAlign: "center",
        fontWeight: "600",
        marginVertical: 5,
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
