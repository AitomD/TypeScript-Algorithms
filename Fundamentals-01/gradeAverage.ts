export function gradeAverage(grade1 : number, grade2 : number, grade3 : number): string {
    let media = (grade1 + grade2 + grade3) / 3;
    if ( media >= 7){
        return "Approved";
    } else{
        return "Failed";
    }
}

console.log(gradeAverage(1,10,4));
console.log(gradeAverage(7,7,7));
console.log(gradeAverage(1,4,5));