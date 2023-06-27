import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Errors from "../Components/Errors";
import Wizard, { WizardRef } from "react-native-wizard";
import Step1 from "../Components/FirstRunWizSteps/Step1";
import Step2 from "../Components/FirstRunWizSteps/Step2";

type FirstRunProps = { navigation: any; route: any };

const wizard = useRef<WizardRef>(null);

export default function FirstRunWizard() {
    const [isFirstStep, setIsFirstStep] = useState(true);
    const [isLastStep, setIsLastStep] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const stepList = [{ content: <Step1 /> }, { content: <Step2 /> }];

    return (
        <>
            <View style={styles.firstRunButtons}>
                <Button
                    disabled={isFirstStep}
                    title="Prev"
                    onPress={() => wizard.current.prev()}
                />
                <Text>
                    {currentStep + 1} of {stepList.length}
                </Text>
                <Button
                    disabled={isLastStep} //|| checkErrors(errors, currentStep)}
                    title="Next"
                    onPress={() => wizard.current.next()}
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
