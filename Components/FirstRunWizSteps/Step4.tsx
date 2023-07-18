import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import { FirstRunValues } from "../../customTypes";
import { checkboxHitSlop } from "../../Helpers/helpers";
import Checkbox from "expo-checkbox";

export default function Step4() {
    const { values, errors, setFieldValue } =
        useFormikContext<FirstRunValues>();
    console.log(errors);
    return (
        <View>
            <Text style={styles.header}>Available Days</Text>

            <Text style={styles.sectionInfo}>
                Check the days of the week that you are available.
            </Text>

            <View style={styles.container}>
                {values.availableDays.map((day, i) => (
                    <View key={i} style={styles.checkboxContainer}>
                        <Checkbox
                            style={styles.checkbox}
                            value={day.checked}
                            onValueChange={(value) =>
                                setFieldValue(
                                    `availableDays[${i}].checked`,
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

            {errors.availableDays ? (
                <Text style={styles.errors}>
                    {errors.availableDays as string}
                    {/* had to typecast this as a string as TypeScript was expecting that it might be a string[] */}
                </Text>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginBottom: 25,
    },
    header: {
        fontSize: 16,
        fontWeight: "500",
        paddingTop: "33%",
        paddingBottom: "4%",
        textAlign: "center",
    },
    errors: {
        color: "red",
        textAlign: "center",
        fontWeight: "600",
        marginVertical: 5,
    },
    sectionInfo: { textAlign: "center", marginBottom: 10 },
    checkboxContainer: { alignItems: "center" },
    checkbox: {
        margin: "10%",
    },
});
