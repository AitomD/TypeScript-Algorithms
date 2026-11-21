export function largestThree(number1 : number, number2 : number, number3 : number): number{
    let largest = number1;
    if( number2 > largest){
        largest = number2;
    }
    if ( number3 > largest){
        largest = number3;
    }
    return largest;
}

console.log(largestThree(3,1,3))
console.log(largestThree(7, 7, 7));