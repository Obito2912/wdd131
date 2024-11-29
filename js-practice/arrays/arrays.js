const steps = ["one", "two", "three"];

const listTemplate = (step) => `<li>${step}</li>`;
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join('');// set the innerHTML
// -------------------------------------------------------------
const grades = ['A', 'B', 'A']

function getGpa(grade) {
    if (grade === 'A') {
        return 4
    }
    return 3
}

const convertToGpa = grades.map(getGpa)
console.log(convertToGpa);
// -------------------------------------------------------------
const gpaTotal = convertToGpa.reduce(function (total, item) {
    return total + item;
});

const gpa = gpaTotal / convertToGpa.length;

// Simplified -------------------------------------------------------------

const pointsTotal = convertToGpa.reduce((total, item) => total + item);
const gpaSimplified = gpaTotal / convertToGpa.length;

// Even more simplified -------------------------------------------------------------

const gpaSimplest = convertToGpa.reduce((total, item) => total + item) / convertToGpa.length;

// -------------------------------------------------------------

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

filterFruits = fruits.filter((element) => element.length < 6);

// -------------------------------------------------------------

const arrayOfNumbers = [12, 34, 21, 54];
const luckyNumber = 21;

const indexOfLuckyNumber = arrayOfNumbers.indexOf(luckyNumber);

// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------

let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

let namesB = names.filter(element => element[0] === 'B');
// Filters elements in an array based on a condition
// Return Value: A new array containing elements that satisfy the condition (i.e., where the callback returns true)

let namesLength = names.map(name => name.length);
// Transforms each element in an array by applying a function to it.
// Return Value: A new array containing the transformed elements.

let averageStringLength = names.reduce((total, name) => total + name.length, 0) / names.length;
// Reduces the array to a single value by repeatedly applying a function to an accumulator and each element in the array.
// Return Value: A single value (of any type) as the result of the reduction process.

// The initial value of the reduction is set to 0. Inside the reducer function, total represents the
// accumulated sum of string lengths, and name represents each individual name in the array. The reducer
// function adds the length of each name to the total in each iteration. (like any accumulator, total += name.length).