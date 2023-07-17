import { hookstate, State, useHookstate } from "@hookstate/core";
import {
    FirstRunValues,
    ProfileFormValues,
    SettingsFormValues,
} from "./customTypes";

const initalState = {
    businessName: "",
    availableDays: [],
    deposit: "",
    operatingHoursStart: "",
    operatingHoursEnd: "",
    clientEmailNotifications: false,
    clientSMSNotifications: false,
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
};

const globalState = hookstate<FirstRunValues>(initalState);

const wrapState = (state: State<FirstRunValues>) => ({
    get: () => state.value,
    setUser: (user: FirstRunValues) => state.set(user),
    setUserProfile: (values: ProfileFormValues) =>
        state.set((prevState) => {
            return { ...prevState, ...values };
        }),
    setUserSettings: (values: SettingsFormValues) =>
        state.set((prevState) => {
            return { ...prevState, ...values };
        }),
    logOut: () => state.set(initalState),
});

export const useGlobalState = () => wrapState(useHookstate(globalState));
