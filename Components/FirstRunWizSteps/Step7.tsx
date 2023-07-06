import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import { FirstRunValues } from "../../customTypes";
import SwitchSelector from "react-native-switch-selector";
import { checkboxHitSlop } from "../../Helpers/helpers";
import Checkbox from "expo-checkbox";

// BUG: if switch selector is changed to "set" and then you go back a page and then come back, page will remember switch selector being set to "set" but state variable will be reset so checkboxes aren't rendered. This should be fixed with async

export default function Step7() {
    const { values, errors, setFieldValue } =
        useFormikContext<FirstRunValues>();

    const [noNotificationsChecked, setNoNotificationsChecked] = useState(true);

    return (
        <View>
            <Text style={styles.header}>Client Notifications</Text>

            <Text style={styles.sectionInfo}>
                Check boxes to generate client SMS and/or Email notifcations.
            </Text>

            <View style={styles.switchContainer}>
                <SwitchSelector
                    options={[
                        { label: "None", value: true },
                        { label: "Set", value: false },
                    ]}
                    initial={
                        values.clientEmailNotifications &&
                        values.clientSMSNotifications
                            ? 1
                            : 0
                    }
                    hitSlop={checkboxHitSlop}
                    buttonColor={"midnightblue"}
                    onPress={(value: any) => {
                        setNoNotificationsChecked(value);
                        setFieldValue("clientEmailNotifications", !value);
                        setFieldValue("clientSMSNotifications", !value);
                    }}
                />
            </View>

            {!noNotificationsChecked && (
                <>
                    <View style={styles.notificationsContainer}>
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

                    <View style={styles.notificationsContainer}>
                        <Checkbox
                            value={values.clientSMSNotifications}
                            onValueChange={(value) =>
                                setFieldValue("clientSMSNotifications", value)
                            }
                            color={
                                values.clientSMSNotifications
                                    ? "#4630EB"
                                    : undefined
                            }
                            hitSlop={checkboxHitSlop}
                        />
                        <Text style={styles.checkboxText}>
                            Clients will recieve SMS notifcations.
                        </Text>
                    </View>
                </>
            )}
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
    switchContainer: { alignItems: "center", padding: 25 },
    notificationsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
    },
    checkboxText: { paddingLeft: 10 },
});
