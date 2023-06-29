export type AvailableDay = { value: number; label: string; checked: boolean };

export type SettingsValues = {
    businessName: string;
    availableDays: AvailableDay[];
    deposit: string;
    regularHoursStart: string;
    regularHoursEnd: string;
    clientEmailNotifications: boolean;
    clientSMSNotifications: boolean;
};
