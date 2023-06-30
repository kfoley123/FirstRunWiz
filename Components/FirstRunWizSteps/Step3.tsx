import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import { FirstRunValues } from "../../customTypes";
import Errors from "../Errors";
import { checkboxHitSlop } from "../../Helpers/helpers";
import Checkbox from "expo-checkbox";

export default function Step3() {
    const { values, errors, setFieldValue } =
        useFormikContext<FirstRunValues>();
    console.log(errors);
    return (
        <View>
            <Text style={styles.header}>Available Days</Text>

            <Text style={styles.sectionInfo}>
                Check which days of the week are you available.
            </Text>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                }}
            >
                {values.SettingsValues.availableDays.map((day, i) => (
                    <View key={i} style={styles.checkboxContainer}>
                        <Checkbox
                            style={styles.checkbox}
                            value={day.checked}
                            onValueChange={(value) =>
                                setFieldValue(
                                    `SettingsValues.availableDays[${i}].checked`,
                                    value
                                )
                            }
                            color={day.checked ? "#4630EB" : undefined}
                            hitSlop={checkboxHitSlop}
                        />
                        <Text>{day.label}</Text>
                    </View>
                ))}
            </View>

            <Errors errorMessage={errors.SettingsValues?.availableDays} />
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
    sectionInfo: { textAlign: "center", marginBottom: 10 },
    checkboxContainer: { alignItems: "center" },
    checkbox: {
        margin: "10%",
    },
});