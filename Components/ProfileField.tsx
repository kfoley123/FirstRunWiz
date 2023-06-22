import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type ProfileFieldProps = {
    icon?: "phone" | "email" | "name";
    label: string;
    value: string;
};

export default function ProfileField({
    icon,
    label,
    value,
}: ProfileFieldProps) {
    const getIcon = (icon: string) => {
        if (icon === "phone") {
            return (
                <MaterialIcons name="local-phone" style={styles.modalIcon} />
            );
        } else if (icon === "email") {
            return <MaterialIcons name="email" style={styles.modalIcon} />;
        } else if (icon === "name") {
            return <MaterialIcons name="person" style={styles.modalIcon} />;
        } else return <></>;
    };

    return (
        <View>
            <Text style={styles.labelText}>{label}</Text>
            <View style={styles.fields}>
                {icon && getIcon(icon)}
                <Text>{value}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    labelText: { color: "slategrey", fontSize: 12, paddingLeft: "4%" },
    fields: { flexDirection: "row", paddingLeft: "4%" },
    modalIcon: { fontSize: 20, color: "black", paddingRight: 5 },
});
