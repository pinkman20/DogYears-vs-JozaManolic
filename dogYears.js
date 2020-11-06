// How old am I in dog years?

const myAge = 12;

// The first two years of dogs life calculates as 10.5 years each

let earlyYears = 2
earlyYears*=10.5

// To get later years we substract two years from myAge

let laterYears = myAge - 2;
 
// The remaining dog years are multiplied by 4 per year

laterYears*=4;

let totalDogYears = earlyYears + laterYears;
console.log(`If I was a dog I would now be ${totalDogYears} years old.`)

// Comparison with the oldest living Croatian legend - Joža Manolić!

// Who is older? Me in dog years vs legend Joža?

let joza = 100;

const whoIsOlder = () => {
    if (joza<totalDogYears) {
        return console.log(`Finally someone older than Joža! You are older by ${totalDogYears-joza} years. `)
    }else if (joza===totalDogYears) {
        return console.log('You and Joža share the same age!')
    }else {
        return console.log('No one can be older than Joža the undying!')
    }

}
whoIsOlder();


// How old is Joza in dog years? 


let laterAgeJoza = joza - 2;
laterAgeJoza*=4;
let totalDogYearsJoza = earlyYears + laterAgeJoza;
console.log('Joža in dog years: ' + totalDogYearsJoza); 