export const checkboxHitSlop = { bottom: 20, left: 20, right: 20, top: 20 };

export const fullDayTimes = () => {
    var fullDayTimesArray: string[] = [];
    for (let i = 1; i <= 24; i++) {
        fullDayTimesArray.push(i.toString() + ":00");
    }
    return fullDayTimesArray;
};

export function generateEndTimes(startTime: string): string[] {
    return fullDayTimes().slice(fullDayTimes().indexOf(startTime) + 1);
}
