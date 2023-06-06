// const age = 29;
// const RETIREMENT_AGE = 65;

// // console.log(RETIREMENT_AGE - age);

// function calculateRetirementYears (ageParamameter) {
//     const retirement = RETIREMENT_AGE - ageParamameter;
//     console.log(retirement, 'years left');
// }

// calculateRetirementYears(age);

// const YEAR_TODAY = 2023;
// const RETIREMENT_AGE = 65;

// function calculateAge(birthYearParameter) {
//     return YEAR_TODAY - birthYearParameter;
// }
// // calculateAge(18) -> return 2023 - 18;


// function calculateRetirementYears(birthYearParameter) {
//     const retirement = RETIREMENT_AGE - calculateAge(birthYearParameter);
//     console.log(retirement, 'years left');
// }

// console.log(calculateAge(1995));

// calculateRetirementYears(1995);

// Ejemplos de funciones que ya habiamos usado
// console.log();
// Number();
// parseInt();

// Yaxche, tienes x años porque naciste en x año

function calcAge(birthYear) {
    const age = 2023 - birthYear;

    function printAge() {
        const output = firstName + ' tienes' + age + ' años, porque naciste en ' + birthYear;
        
        console.log(output);
        //Yaxche tienes30 años, porque naciste en 1993

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            let firstName = 'Yax';
            
            const millenialString = 'Oh, si eres millenial '+ firstName;
            
            console.log(millenialString);
            //Oh, si eres millenial Yax
        }
        
        console.log(millenial);
        //true
    }

    printAge();
    return age;
}

let firstName = 'Yaxche';
calcAge(1993);

function printAge2() {
    console.log(age);
}

printAge2();