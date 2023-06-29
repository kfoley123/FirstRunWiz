import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Wizard, { WizardRef } from "react-native-wizard";
import Step1 from "../Components/FirstRunWizSteps/Step1";
import Step2 from "../Components/FirstRunWizSteps/Step2";
import { SettingsValues } from "../customTypes";

type FirstRunProps = { navigation: any; route: any };

export default function FirstRunWizard(props: FirstRunProps) {
    const wizard = useRef<WizardRef>(null);
    const [isFirstStep, setIsFirstStep] = useState(true);
    const [isLastStep, setIsLastStep] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const stepList = [{ content: <Step1 /> }, { content: <Step2 /> }];

    const initalFormValues: SettingsValues = {
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
        clientSMSNotifications: false,
    };

    const FirstRunSchema = Yup.object().shape({
        businessName: Yup.string().required("Business Name is required"),
        availableDays: Yup.array()
            .of(
                Yup.object().shape({
                    value: Yup.number(),
                    label: Yup.string(),
                    checked: Yup.boolean(),
                })
            )
            .compact((v) => !v.checked)
            .min(1, "You must check at least one day"),
        deposit: Yup.string().matches(/^\d+(?:\.\d{1,2})?$/, "Invalid amount"),
        regularHoursStart: Yup.string().required(
            "Regular hours start time is required"
        ),
        regularHoursEnd: Yup.string()
            .required("Regular hours end time is required")
            .test(
                "isValidTime",
                "End time must be later than start time",
                function (value) {
                    const { regularHoursStart } = this.parent;
                    if (!regularHoursStart && !value) {
                        return true;
                    }
                    if (regularHoursStart && value) {
                        const startTime = Number(
                            regularHoursStart.split(":", 1)
                        );
                        const endTime = Number(value.split(":", 1));
                        return endTime > startTime;
                    }
                }
            ),
    });

    return (
        <Formik
            initialValues={initalFormValues}
            validationSchema={FirstRunSchema}
            onSubmit={(values) => {
                console.log(values);
                // artistFirstRun(values, user, props.route.params.setFlag);
            }}
            validateOnMount={true}
        >
            {({ errors }) => (
                <>
                    <View style={styles.firstRunButtons}>
                        <Button
                            disabled={isFirstStep}
                            title="Prev"
                            onPress={() => {
                                if (wizard.current !== null) {
                                    wizard.current.prev();
                                }
                            }}
                        />
                        <Text>
                            {currentStep + 1} of {stepList.length}
                        </Text>
                        <Button
                            disabled={isLastStep} //|| checkErrors(errors, currentStep)}
                            title="Next"
                            onPress={() => {
                                if (wizard.current !== null) {
                                    wizard.current.next();
                                }
                            }}
                        />
                    </View>
                    <Wizard
                        ref={wizard}
                        activeStep={0}
                        steps={stepList}
                        isFirstStep={(val) => setIsFirstStep(val)}
                        isLastStep={(val) => setIsLastStep(val)}
                        currentStep={({ currentStep }) => {
                            setCurrentStep(currentStep);
                        }}
                    />
                </>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    firstRunButtons: {
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderBottomColor: "#dedede",
        borderBottomWidth: 1,
        paddingTop: 60,
    },
});
