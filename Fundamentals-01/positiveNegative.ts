export default function positiveNegative(number : number) : string{
    if ( number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(positiveNegative(0));
console.log(positiveNegative(1));
console.log(positiveNegative(-2));