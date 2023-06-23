declare module "react-native-switch-selector" {
    import { Component } from "react";
    import {
        ImageStyle,
        RegisteredStyle,
        TextStyle,
        ViewStyle,
    } from "react-native";

    export interface ISwitchSelectorOption {
        label: string;
        value: string | number;
        customIcon?: JSX.Element;
        imageIcon?: string;
        activeColor?: string;
        accessibilityLabel?: string;
        testID?: string;
    }

    export interface ISwitchSelectorProps {
        options: ISwitchSelectorOption[];
        initial?: number;
        value?: number;
        onPress(value: string | number | ISwitchSelectorOption): void;
        fontSize?: number;
        selectedColor?: string;
        buttonMargin?: number;
        buttonColor?: string;
        textColor?: string;
        backgroundColor?: string;
        borderColor?: string;
        borderRadius?: number;
        hasPadding?: boolean;
        animationDuration?: number;
        valuePadding?: number;
        height?: number;
        bold?: boolean;
        textStyle?: TextStyle | RegisteredStyleTextStyle;
        selectedTextStyle?: TextStyle | RegisteredStyleTextStyle;
        textCStyle?: TextStyle | RegisteredStyleTextStyle;
        selectedTextContainerStyle?: TextStyle | RegisteredStyleTextStyle;
        imageStyle?: ImageStyle | RegisteredStyleImageStyle;
        style?: ViewStyle | RegisteredStyleViewStyle;
        returnObject?: boolean;
        disabled?: boolean;
        disableValueChangeOnPress?: boolean;
        accessibilityLabel?: string;
        testID?: string;
    }

    class SwitchSelector extends ComponentISwitchSelectorProps {}

    export default SwitchSelector;
}
