import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { useFormikContext } from "formik";
import { FirstRunValues } from "../../customTypes";
import Seperator from "../Seperator";
import CustomButton from "../CustomButton";

// BUG: if switch selector is changed to "set" and then you go back a page and then come back, page will remember switch selector being set to "set" but state variable will be reset so checkboxes aren't rendered. This should be fixed with async

export default function Summary() {
    const { values, errors, handleSubmit } = useFormikContext<FirstRunValues>();

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>Summary</Text>
                {/* ----------------  Name -------------- */}
                <View style={styles.row}>
                    <Text style={styles.subheader}>Name:</Text>
                    <Text>{values.name}</Text>
                </View>

                <Seperator />
                {/* ---------------- Email -------------- */}
                <View style={styles.row}>
                    <Text style={styles.subheader}>Email:</Text>
                    <Text>{values.email}</Text>
                </View>

                <Seperator />
                {/* ----------------  Phone -------------- */}
                <View style={styles.row}>
                    <Text style={styles.subheader}>Phone:</Text>
                    <Text>{values.phone}</Text>
                </View>

                <Seperator />

                {/* ----------------  Business Name -------------- */}
                <View style={styles.row}>
                    <Text style={styles.subheader}>Business Name:</Text>
                    <Text>{values.businessName}</Text>
                </View>

                <Seperator />

                {/* ---------------- Available Days -------------- */}

                <View>
                    <Text style={styles.subheader}>Available Days:</Text>

                    {values.availableDays
                        .filter((day) => day.checked)
                        .map((day, i) => (
                            <Text key={i}>{day.label}</Text>
                        ))}
                </View>
                <Seperator />

                {/* ---------------- Deposit Amount -------------- */}

                <View style={styles.row}>
                    <Text style={styles.subheader}>Deposit Amount:</Text>
                    <Text>{values.deposit}</Text>
                </View>
                <Seperator />

                {/* ---------------- Operating Hours -------------- */}

                <View>
                    <Text style={styles.subheader}>Operating Hours</Text>
                    <View style={styles.row}>
                        <Text style={styles.field}>Start Time:</Text>
                        <Text>{values.operatingHoursStart}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.field}>End Time:</Text>
                        <Text>{values.operatingHoursEnd}</Text>
                    </View>
                </View>
                <Seperator />
                {/* ---------------- Client Notifcations -------------- */}

                <View>
                    <Text style={styles.subheader}>Client Notifications</Text>
                    <View style={styles.row}>
                        <Text style={styles.field}>SMS Notifcations:</Text>
                        <Text>{values.clientSMSNotifications.toString()}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.field}>Email Notifcations:</Text>
                        <Text>
                            {values.clientEmailNotifications.toString()}
                        </Text>
                    </View>
                </View>
                <Seperator />

                {/* ----------Submit Button  ----------- */}
                <View style={styles.buttonContainer}>
                    <CustomButton
                        title={"Complete Set Up"}
                        buttonWidth={300}
                        buttonOnPress={handleSubmit}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
    },
    header: {
        fontSize: 16,
        fontWeight: "500",
        paddingVertical: 15,
        textAlign: "center",
    },
    subheader: { fontSize: 14, fontWeight: "500", paddingRight: 5 },
    field: { paddingRight: 5 },
    row: { flexDirection: "row", paddingVertical: 5 },
    buttonContainer: { alignItems: "center", marginBottom: 100 },
});
