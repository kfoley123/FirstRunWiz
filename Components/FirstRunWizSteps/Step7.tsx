import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useFormikContext } from "formik";
import { FirstRunValues } from "../../customTypes";
import Errors from "../Errors";

export default function Step7() {
    const { values, errors, handleChange, handleBlur } =
        useFormikContext<FirstRunValues>();
    return (
        <View>
            <Errors errorMessage={errors.SettingsValues?.deposit} />
        </View>
    );
}

const styles = StyleSheet.create({});
