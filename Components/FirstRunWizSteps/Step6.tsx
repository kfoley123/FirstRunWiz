import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useFormikContext } from "formik";
import { FirstRunValues } from "../../customTypes";
import Errors from "../Errors";
import { fullDayTimes, generateEndTimes } from "../../Helpers/helpers";
import SelectDropdown from "react-native-select-dropdown";

export default function Step6() {
    const { values, errors, handleChange, handleBlur } =
        useFormikContext<FirstRunValues>();
    return (
        <View>
            <Text style={styles.header}> Hours</Text>

            <Text style={styles.sectionInfo}>
                The start and end time of a regular work day according to 24
                hour clock.
            </Text>
            <View style={styles.selectContainer}>
                <Text style={styles.option}>Start Time</Text>
                <SelectDropdown
                    data={fullDayTimes()}
                    renderDropdownIcon={() => <Text>▼</Text>}
                    buttonStyle={styles.dropdownButtonStyle}
                    onSelect={handleChange("regularHoursStart")}
                    onBlur={() => handleBlur("regularHoursStart")}
                    defaultButtonText={"Set"}
                    defaultValue={values.regularHoursStart}
                />
            </View>

            <Errors errorMessage={errors.regularHoursStart} />

            {values.regularHoursStart && (
                <View style={styles.selectContainer}>
                    <Text style={styles.option}>End Time</Text>
                    <SelectDropdown
                        data={generateEndTimes(values.regularHoursStart)}
                        renderDropdownIcon={() => <Text>▼</Text>}
                        buttonStyle={styles.dropdownButtonStyle}
                        onSelect={handleChange("regularHoursEnd")}
                        onBlur={() => handleBlur("regularHoursEnd")}
                        defaultButtonText={"Set"}
                        defaultValue={values.regularHoursEnd}
                    />
                </View>
            )}

            <Errors errorMessage={errors.regularHoursEnd} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        fontWeight: "500",
        paddingTop: "33%",
        paddingBottom: "4%",
        textAlign: "center",
    },
    sectionInfo: { paddingHorizontal: "5%", marginBottom: 10 },
    selectContainer: {
        flexDirection: "row",
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    dropdownButtonStyle: {
        borderRadius: 6,
        height: 30,
        marginHorizontal: "10%",
        width: 120,
        borderWidth: 1,
        borderColor: "black",
    },
    option: { marginLeft: "7%" },
});
