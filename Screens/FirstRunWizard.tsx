import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Wizard, { WizardRef } from "react-native-wizard";
import { FirstRunValues } from "../customTypes";
import Step1 from "../Components/FirstRunWizSteps/Step1";
import Step2 from "../Components/FirstRunWizSteps/Step2";
import Step3 from "../Components/FirstRunWizSteps/Step3";
import Step4 from "../Components/FirstRunWizSteps/Step4";
import Step5 from "../Components/FirstRunWizSteps/Step5";
import Step6 from "../Components/FirstRunWizSteps/Step6";
import Step7 from "../Components/FirstRunWizSteps/Step7";
import Summary from "../Components/FirstRunWizSteps/Summary";

type FirstRunProps = { navigation: any };

export default function FirstRunWizard({ navigation }: FirstRunProps) {
    const wizard = useRef<WizardRef>(null);
    const [isFirstStep, setIsFirstStep] = useState(true);
    const [isLastStep, setIsLastStep] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const stepList = [
        { content: <Step1 /> },
        { content: <Step2 /> },
        { content: <Step3 /> },
        { content: <Step4 /> },
        { content: <Step5 /> },
        { content: <Step6 /> },
        { content: <Step7 /> },
        { content: <Summary /> },
    ];

    const initalFormValues: FirstRunValues = {
        ProfileValues: { email: "", phone: "", name: "" },
        SettingsValues: {
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
        },
        password: "",
        confirmPassword: "",
    };

    const FirstRunSchema = Yup.object().shape({
        name: Yup.string()
            .min(4, "Must be at least 4 characters")
            .max(50, "Must be less than 50 characters")
            .required("name is required"),
        email: Yup.string()
            .matches(
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Invalid email address"
            )
            //built in Yup email validation allows errors so had to use a different regex
            .max(256, "Must be less than 256 characters")
            .required("email is required"),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, "Invalid phone number")
            .required("Phone number is required"),
        password: Yup.string()
            .required("Password is required")
            .min(4, "Must be at least 4 characters"),
        confirmPassword: Yup.string()
            .required("Password is required")
            .test("Passwords match", "Passwords must match", function (value) {
                const { password } = this.parent;
                if (password !== value) {
                    return false;
                }
            }),
        businessName: Yup.string()
            .required("Business Name is required")
            .min(4, "Must be at least 4 characters")
            .max(50, "Must be less than 50 characters"),
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
                <SafeAreaView>
                    <View style={styles.cancelButton}>
                        <Button
                            title="Cancel"
                            onPress={() =>
                                Alert.alert(
                                    "Are you sure you want to cancel?",
                                    "",
                                    [
                                        {
                                            text: "Cancel Set Up",
                                            onPress: () => navigation.goBack(),
                                        },
                                    ]
                                )
                            }
                        />
                    </View>

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
                                    console.log(errors);
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
                </SafeAreaView>
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
    cancelButton: {
        backgroundColor: "#FFF",
        borderTopWidth: 1,
        borderTopColor: "#dedede",
        marginTop: "1%",
    },
    firstRunButtons: {
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderBottomColor: "#dedede",
        borderBottomWidth: 1,
        paddingTop: 40,
        paddingHorizontal: "3%",
    },
});
