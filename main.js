//step 1 : my age 

let myAge = 32; 

//step 2: this variable called early years is currently set to 2 and can change

let earlyYears = 2;

//
earlyYears  *= 10.5; 

//  this is where the value for later years is determined as he already noted the first 2 years

let laterYears = myAge - 2;

//This is * the laterYears variable by 4 to calculate number of dog years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//adding earlyYears and laterYears equals my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//variable is all changed to lower case in my name
let myName = 'Ryan'.toLowerCase();

//takes my name, my age and my age in dog years to replace into the sentence 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); 
