export default function largestNumber(number1 : number, number2 : number): string {
    if ( number1 > number2){
        return "Number 1 is largest";
    } 
    else if (number2 > number1){
        return "Number 2 is largest";
    } else{
        return "The numbers are the same";
    }
}

console.log(largestNumber(1,5));
console.log(largestNumber(-2,-3));
console.log(largestNumber(5,5));