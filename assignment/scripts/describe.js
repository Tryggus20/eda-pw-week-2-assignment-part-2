// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'name' and set it to 'Dane"
// We check if 'name' is 'Mary'. Since it is not, we console.log 'How do you do?'
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'secret' and do not give it a value yet
// We make a variable called 'code' and give it a value of '123'
// since the value for 'code' is '123', the variable 'secret' gets a value of 'super'
// also, since '123' was the value for 'code', it gets multiplied by 2 and is now "246"
// since 246 is < 250, the value for 'secret' does not change so the console.log will read 'super' 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We start with 'isStudent' set to 'true' and an 'age' value of '34' with a 'zip' value of 55407
// We check if the person is a student AND has a zip greater than 80000. Since that is not the case, we move on.
// We check if the person is not a student, or if the age is less than 30. Since the person is both a student, and over 30 we move on.
// We then check if the person is a student. Since that value is 'true' we console.log 'Welcome to Prime!'
// Since we fulfilled the paramaters for the above we would ignore the remaining code.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - colorOne is set to 'red' and colorTwo is set to 'blue'. They are flipped
// only colorOne gets changed to purple. would need to add colorTwo = 'purple'; 

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// FIX - instead of using || which means and/or you would want to use && so both conditions need to be met to get the console.log of 'throw away the food'
// also I believe time should not be a constant and 'let time = 4;' should have been used instead
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - This code checking if the age is greater than or equal to minAge, and if so we are getting a console.log of 'no entry'
// which is the exact opposite of what was intended. The code should be changed to:
// if(age < minAge){   and that would fix the issue.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

