export type AvailableDay = { value: number; label: string; checked: boolean };

export type SettingsFormValues = {
    businessName: string;
    availableDays: AvailableDay[];
    deposit: string;
    regularHoursStart: string;
    regularHoursEnd: string;
    clientEmailNotifications: boolean;
    clientSMSNotifications: boolean;
};

export type ProfileFormValues = {
    name: string;
    email: string;
    phone: string;
};

export type FirstRunValues = {
    SettingsValues: SettingsFormValues;
    ProfileValues: ProfileFormValues;
    password: string;
    confirmPassword: string;
};
