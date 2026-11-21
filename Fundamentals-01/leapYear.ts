export function leapYear(year: number): boolean {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(leapYear(2000));
console.log(leapYear(1993));
console.log(leapYear(2027));