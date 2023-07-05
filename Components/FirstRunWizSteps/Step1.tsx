import React from "react";
import { StyleSheet, Text, TextInput, SafeAreaView } from "react-native";
import { useFormikContext } from "formik";
import { FirstRunValues, SettingsFormValues } from "../../customTypes";
import Errors from "../Errors";

function formatPhoneNumber(phoneNumber: string) {
    let input = phoneNumber.replace(/\D/g, "");
    const size = input.length;
    if (size > 0) {
        input = "(" + input;
    }
    if (size > 3) {
        input = input.slice(0, 4) + ") " + input.slice(4, 11);
    }
    if (size > 6) {
        input = input.slice(0, 9) + "-" + input.slice(9);
    }
    return input;
}

export default function Step1() {
    const { values, errors, handleChange, setFieldValue } =
        useFormikContext<FirstRunValues>();
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
                autoCapitalize="none"
                value={values.ProfileValues.email}
                style={styles.input}
            ></TextInput>

            <Errors errorMessage={errors.ProfileValues?.email} />

            <Text style={styles.header}>Phone Number </Text>

            <TextInput
                onChangeText={(text) => {
                    setFieldValue(
                        "ProfileValues.phone",
                        formatPhoneNumber(text)
                    );
                }}
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
