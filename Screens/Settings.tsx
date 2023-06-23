import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import SelectDropdown from "react-native-select-dropdown";
import Checkbox from "expo-checkbox";
import { TextInput } from "react-native-gesture-handler";
import Seperator from "../Components/Seperator";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../Components/CustomButton";

type AvailableDay = { value: number; label: string; checked: boolean };

type SettingsValues = { availableDays: AvailableDay[] };

const checkboxHitSlop = { bottom: 20, left: 20, right: 20, top: 20 };

const SettingsSchema = Yup.object().shape({});

const settingsFormValues: SettingsValues = {
    availableDays: [
        { value: 0, label: "Sunday", checked: false },
        { value: 1, label: "Monday", checked: false },
        { value: 2, label: "Tuesday", checked: false },
        { value: 3, label: "Wednesday", checked: false },
        { value: 4, label: "Thursday", checked: false },
        { value: 5, label: "Friday", checked: false },
        { value: 6, label: "Saturday", checked: false },
    ],
};

export default function Settings() {
    const [sectionInfoVisible, setSectionInfoVisible] = useState({
        workingDays: false,
    });

    return (
        <Formik
            initialValues={settingsFormValues}
            validationSchema={SettingsSchema}
            onSubmit={(values) => console.log(values)}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                values,
                errors,
                touched,
            }) => (
                <ScrollView style={styles.container}>
                    <StatusBar />
                    {/* ----------Working Days Selector--------- */}
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Available Days</Text>
                        <TouchableOpacity
                            onPress={() =>
                                setSectionInfoVisible((pVal) => {
                                    return {
                                        ...pVal,
                                        workingDays: !pVal.workingDays,
                                    };
                                })
                            }
                            hitSlop={checkboxHitSlop}
                        >
                            <Ionicons
                                name="information-circle-sharp"
                                style={styles.infoIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={[
                            sectionInfoVisible.workingDays
                                ? styles.sectionInfoOpen
                                : styles.sectionInfo,
                        ]}
                    >
                        Check which days of the week are you available.
                    </Text>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            flexWrap: "wrap",
                        }}
                    >
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

                    {errors.availableDays && touched.availableDays ? (
                        <Text style={styles.errors}>
                            {errors.availableDays.toString()}
                        </Text>
                    ) : null}

                    <Seperator />
                    {/* ----------Save Button ----------- */}

                    <View style={styles.buttonContainer}>
                        <CustomButton
                            title={"Save"}
                            buttonWidth={75}
                            buttonOnPress={handleSubmit}
                        />
                    </View>
                </ScrollView>
            )}
        </Formik>
    );
}

// days of the week check box -
//  selectdropdown -
// check box / switch selector -
// text input -
// number input -
//

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: { flexDirection: "row", alignItems: "center" },
    header: {
        fontSize: 16,
        fontWeight: "500",
        paddingVertical: 15,
        paddingLeft: "5%",
    },
    checkboxContainer: { alignItems: "center" },
    checkbox: {
        margin: "10%",
    },
    errors: {
        color: "red",
        textAlign: "center",
        fontWeight: "600",
        marginVertical: 5,
    },
    infoIcon: { fontSize: 20, color: "black", marginLeft: 5 },
    sectionInfo: { paddingHorizontal: "5%", marginBottom: 10, display: "none" },
    sectionInfoOpen: { paddingHorizontal: "5%", marginBottom: 10 },
    buttonContainer: { alignItems: "center", marginBottom: 30 },
});
