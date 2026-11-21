export function bmiCalculator ( weight : number, height : number) : string {
    let bmi = weight / (height ** 2);

    if ( bmi <= 18.5) return "Underweight";
    else if ( bmi <= 24.9 ) return "Normal";
    else if ( bmi <= 29.9) return "Overweight";
    else return "Incalculado"
}   