import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import SelectDropdown from "react-native-select-dropdown";

type SettingsValues = {};

const SettingsSchema = Yup.object().shape({});

const settingsFormValues: SettingsValues = {};

export default function Settings() {
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
                <View style={styles.container}>
                    <StatusBar />
                    <Text> Settings</Text>
                    <TextInput></TextInput>
                </View>
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
        alignItems: "center",
        justifyContent: "center",
    },
});
