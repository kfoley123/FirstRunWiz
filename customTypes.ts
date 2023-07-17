export type AvailableDay = { value: number; label: string; checked: boolean };

export type SettingsFormValues = {
    businessName: string;
    availableDays: AvailableDay[];
    deposit: string;
    operatingHoursStart: string;
    operatingHoursEnd: string;
    clientEmailNotifications: boolean;
    clientSMSNotifications: boolean;
};

export type ProfileFormValues = {
    name: string;
    email: string;
    phone: string;
};

export interface FirstRunValues extends SettingsFormValues, ProfileFormValues {
    password: string;
    confirmPassword: string;
}

export type SettingsValues = {
    businessName: string;
    availableDays: AvailableDay[];
    deposit: string;
    operatingHoursStart: string;
    operatingHoursEnd: string;
    clientEmailNotifications: boolean;
    clientSMSNotifications: boolean;
};
