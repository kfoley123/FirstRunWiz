import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import SelectDropdown from "react-native-select-dropdown";
import Checkbox from "expo-checkbox";
import Seperator from "../Components/Seperator";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../Components/CustomButton";

type AvailableDay = { value: number; label: string; checked: boolean };

type SettingsValues = {
    businessName: string;
    availableDays: AvailableDay[];
    deposit: string;
    regularHoursStart: string;
    regularHoursEnd: string;
    clientEmailNotifications: boolean;
};

const checkboxHitSlop = { bottom: 20, left: 20, right: 20, top: 20 };

export const fullDayTimes = [
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
];

export function generateEndTimes(startTime: string): string[] {
    return fullDayTimes.slice(fullDayTimes.indexOf(startTime) + 1);
}

const SettingsSchema = Yup.object().shape({});

const settingsFormValues: SettingsValues = {
    businessName: "",
    availableDays: [
        { value: 0, label: "Sunday", checked: false },
        { value: 1, label: "Monday", checked: false },
        { value: 2, label: "Tuesday", checked: false },
        { value: 3, label: "Wednesday", checked: false },
        { value: 4, label: "Thursday", checked: false },
        { value: 5, label: "Friday", checked: false },
        { value: 6, label: "Saturday", checked: false },
    ],
    deposit: "0.00",
    regularHoursStart: "",
    regularHoursEnd: "",
    clientEmailNotifications: false,
};

export default function Settings() {
    const [sectionInfoVisible, setSectionInfoVisible] = useState({
        businessName: false,
        workingDays: false,
        deposit: false,
        regularHours: false,
        clientEmailNotifications: false,
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

                    {/* ----------Business Name--------- */}

                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Business Name</Text>
                        <TouchableOpacity
                            onPress={() =>
                                setSectionInfoVisible((pVal) => {
                                    return {
                                        ...pVal,
                                        businessName: !pVal.businessName,
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
                            sectionInfoVisible.businessName
                                ? styles.sectionInfoOpen
                                : styles.sectionInfo,
                        ]}
                    >
                        The name of your business as it will appear to your
                        clients.
                    </Text>

                    <TextInput
                        onChangeText={handleChange("businessName")}
                        autoCapitalize="words"
                        value={values.businessName}
                        style={styles.input}
                    ></TextInput>

                    {errors.businessName && (
                        <Text style={styles.errors}>{errors.businessName}</Text>
                    )}

                    <Seperator />

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

                    {/* ----------Deposit--------- */}

                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Deposit Amount</Text>
                        <TouchableOpacity
                            onPress={() =>
                                setSectionInfoVisible((pVal) => {
                                    return { ...pVal, deposit: !pVal.deposit };
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
                            sectionInfoVisible.deposit
                                ? styles.sectionInfoOpen
                                : styles.sectionInfo,
                        ]}
                    >
                        Enter the deposit amount (CAD) for a client to book an
                        appointment.
                    </Text>
                    <View style={styles.optionRow}>
                        <Text>$</Text>
                        <TextInput
                            keyboardType="numeric"
                            returnKeyType="done"
                            onChangeText={handleChange("deposit")}
                            onBlur={handleBlur("deposit")}
                            value={values.deposit}
                            style={styles.depositInput}
                            defaultValue={values.deposit}
                        ></TextInput>

                        {errors.deposit && touched.deposit ? (
                            <Text style={styles.errors}>{errors.deposit}</Text>
                        ) : null}
                    </View>

                    <Seperator />

                    {/* ---------- Hours Selector--------- */}

                    <View style={styles.headerContainer}>
                        <Text style={styles.header}> Hours</Text>
                        <TouchableOpacity
                            onPress={() =>
                                setSectionInfoVisible((pVal) => {
                                    return {
                                        ...pVal,
                                        regularHours: !pVal.regularHours,
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
                            sectionInfoVisible.regularHours
                                ? styles.sectionInfoOpen
                                : styles.sectionInfo,
                        ]}
                    >
                        The start and end time of a regular work day according
                        to 24 hour clock.
                    </Text>
                    <View style={styles.selectContainer}>
                        <Text style={styles.option}>Start Time</Text>
                        <SelectDropdown
                            data={fullDayTimes}
                            renderDropdownIcon={() => <Text>▼</Text>}
                            buttonStyle={styles.dropdownButtonStyle}
                            onSelect={handleChange("regularHoursStart")}
                            onBlur={() => handleBlur("regularHoursStart")}
                            defaultButtonText={"Set"}
                            defaultValue={values.regularHoursStart}
                        />
                    </View>
                    {errors.regularHoursStart && touched.regularHoursStart ? (
                        <Text style={styles.errors}>
                            {errors.regularHoursStart}
                        </Text>
                    ) : null}

                    {values.regularHoursStart && (
                        <View style={styles.selectContainer}>
                            <Text style={styles.option}>End Time</Text>
                            <SelectDropdown
                                data={generateEndTimes(
                                    values.regularHoursStart
                                )}
                                renderDropdownIcon={() => <Text>▼</Text>}
                                buttonStyle={styles.dropdownButtonStyle}
                                onSelect={handleChange("regularHoursEnd")}
                                onBlur={() => handleBlur("regularHoursEnd")}
                                defaultButtonText={"Set"}
                                defaultValue={values.regularHoursEnd}
                            />
                        </View>
                    )}
                    {errors.regularHoursEnd && touched.regularHoursEnd ? (
                        <Text style={styles.errors}>
                            {errors.regularHoursEnd}
                        </Text>
                    ) : null}

                    <Seperator />

                    {/* ----------Email Notification  ----------- */}

                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Email Notification</Text>
                        <TouchableOpacity
                            onPress={() =>
                                setSectionInfoVisible((pVal) => {
                                    return {
                                        ...pVal,
                                        clientEmailNotifications:
                                            !pVal.clientEmailNotifications,
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
                            sectionInfoVisible.clientEmailNotifications
                                ? styles.sectionInfoOpen
                                : styles.sectionInfo,
                        ]}
                    >
                        If boxed is checked, clients will recieve an email
                        notification.
                    </Text>

                    <View style={styles.emailNotifContainer}>
                        <Checkbox
                            value={values.clientEmailNotifications}
                            onValueChange={(value) =>
                                setFieldValue("clientEmailNotifications", value)
                            }
                            color={
                                values.clientEmailNotifications
                                    ? "#4630EB"
                                    : undefined
                            }
                            hitSlop={checkboxHitSlop}
                        />
                        <Text style={styles.checkboxText}>
                            Clients will recieve email notifcations.
                        </Text>
                    </View>
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

// days of the week check box - availability
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
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        height: 40,
        padding: 10,
        borderRadius: 4,
        marginVertical: 10,
        marginRight: 85,
        marginLeft: 20,
    },
    option: { marginLeft: "7%" },
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
    depositInput: {
        borderWidth: 1,
        borderColor: "slategray",
        borderRadius: 3,
        width: 75,
        height: 30,
        textAlign: "center",
    },
    optionRow: { flexDirection: "row", marginLeft: "7%" },
    selectContainer: {
        flexDirection: "row",
        paddingVertical: 5,
        alignItems: "center",
    },
    dropdownButtonStyle: {
        borderRadius: 6,
        height: 30,
        marginHorizontal: 20,
        width: 120,
    },
    emailNotifContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
    },
    checkboxText: { paddingLeft: 10 },
});
