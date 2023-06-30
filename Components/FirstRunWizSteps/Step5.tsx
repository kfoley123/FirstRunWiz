import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Formik, useFormikContext } from "formik";
import { FirstRunValues } from "../../customTypes";
import Errors from "../Errors";

export default function Step5() {
    const { values, errors, handleChange, handleBlur } =
        useFormikContext<FirstRunValues>();
    return (
        <View>
            <Text style={styles.header}>Deposit Amount</Text>

            <Text style={styles.sectionInfo}>
                Enter the deposit amount (CAD) for a client to book an
                appointment.
            </Text>
            <View style={styles.optionRow}>
                <Text>$</Text>
                <TextInput
                    keyboardType="numeric"
                    returnKeyType="done"
                    onChangeText={handleChange("SettingsValues.deposit")}
                    onBlur={handleBlur("SettingsValues.deposit")}
                    value={values.SettingsValues.deposit}
                    style={styles.depositInput}
                    defaultValue={values.SettingsValues.deposit}
                ></TextInput>
            </View>

            <Errors errorMessage={errors.SettingsValues?.deposit} />
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
    optionRow: { flexDirection: "row", justifyContent: "center" },
    sectionInfo: { paddingHorizontal: "5%", marginBottom: 10 },
    depositInput: {
        borderWidth: 1,
        borderColor: "slategray",
        borderRadius: 3,
        width: 75,
        height: 30,
        textAlign: "center",
    },
});
