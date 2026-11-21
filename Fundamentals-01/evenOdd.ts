export default function evenOdd(number : number) : string{
    if ( number % 2 == 0){
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(evenOdd(10));
console.log(evenOdd(1));
console.log(evenOdd(39));