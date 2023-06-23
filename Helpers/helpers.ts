export const checkboxHitSlop = { bottom: 20, left: 20, right: 20, top: 20 };

export const fullDayTimes = [
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
];

export function generateEndTimes(startTime: string): string[] {
    return fullDayTimes.slice(fullDayTimes.indexOf(startTime) + 1);
}
