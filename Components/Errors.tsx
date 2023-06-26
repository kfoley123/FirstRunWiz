import React from "react";
import { Text, StyleSheet } from "react-native";

type ErrorProps = { errorMessage: string | undefined };

export default function Errors(props: ErrorProps) {
    const { errorMessage } = props;
    return errorMessage ? (
        <Text style={styles.errors}>{errorMessage}</Text>
    ) : (
        <></>
    );
}

const styles = StyleSheet.create({
    errors: { color: "red", textAlign: "center", fontWeight: "500" },
});
