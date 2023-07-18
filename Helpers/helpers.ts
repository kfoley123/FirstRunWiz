export const checkboxHitSlop = { bottom: 20, left: 20, right: 20, top: 20 };

export const fullDayTimes = () => {
  const fullDayTimesArray: string[] = [];
  for (let i = 1; i <= 24; i++) {
    fullDayTimesArray.push(i.toString() + ':00');
  }
  return fullDayTimesArray;
};

export function generateEndTimes(startTime: string): string[] {
  return fullDayTimes().slice(fullDayTimes().indexOf(startTime) + 1);
}

export function formatPhoneNumber(phoneNumber: string) {
  let input = phoneNumber.replace(/\D/g, '');
  const size = input.length;
  if (size > 0) {
    input = '(' + input;
  }
  if (size > 3) {
    input = input.slice(0, 4) + ') ' + input.slice(4, 11);
  }
  if (size > 6) {
    input = input.slice(0, 9) + '-' + input.slice(9);
  }
  return input;
}
