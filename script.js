/* 'use strict';
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers: numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('AB12');
createBooking('AG23', 4, 1000);
createBooking('AG23', 4);
createBooking('AG23', 10);
createBooking('AG23', undefined, 1000);

const flight = 'AG12';
const jonas = {
  name: 'Izzy Beluga',
  passport: 2343434243434,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'SS12';
  passenger.name = 'Ms.' + passenger.name;

  if (passenger.passport === 2343434243434) {
    alert('Checked In');
  } else alert('Wrong Passport');
  // console.log(flightNum);
};

//checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};
newPassport(jonas);
console.log(jonas);
checkIn(flight, jonas);



const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const capFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// High-order function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  // console.log(`original function: ${fn}`);
  console.log(`Transformed to: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

// transformer('Javascript is Weird asf 🤓', capFirstWord);
// transformer('Javascript is Weird asf 🤓', oneWord)


//JS uses callbacks all the time
const highFive = function () {
  console.log('✋');
};

document.body.addEventListener('click', highFive);
['J', 'I', 'A'].forEach(highFive);

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(n) { return n * 2; });
console.log(doubledNumbers); // [2, 4, 6, 8, 10]



const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Wssup');
greeterHey('Drake');
greeterHey('Kanye');

greet('Hey')('Torpa');

//Challenge : - transform to arrow function

const greetArrow = greeting2 => name2 => console.log(`${greeting2} ${name2}`);

greetArrow('Hi')('Travis');
 */

/*
If the function is invoked as a method of an object, this refers to 
the object. If the function is invoked as a standalone function, 
this refers to the global object.

In the case of arrow function, this is lexically scoped and 
it's binding is determined by the surrounding code.



const ethioAir = {
  airline: 'Ethio',
  code: 'ET',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  },
};

// ethioAir.book(134, 'Izzy Torpa');
// ethioAir.book(324, 'Drizzy Scott');

// console.log(ethioAir);

const boeing = {
  // airline: 'africa',
  airline: 'boeing',
  code: 'BO',
  bookings: [],
};

const book = ethioAir.book;

// book(12, 'Michael Scott');  -- Undefined because of this keyword

//Call Method  --

book.call(boeing, 12, 'Michael Scott');
// console.log(boeing);

book.call(ethioAir, 112, 'Michael Jordan');
// console.log(ethioAir);

const qatarLines = {
  airline: 'Qatar',
  code: 'QT',
  bookings: [],
};

book.call(qatarLines, 1343, 'Marry Anne');

//Apply method

const flightData = [345, 'Brittany Spears'];
book.apply(qatarLines, flightData);
// console.log(qatarLines);

book.call(qatarLines, ...flightData);

//Bind method

const bookBO = book.bind(boeing);
const bookET = book.bind(ethioAir);
const bookQA = book.bind(qatarLines);

bookBO(23, 'Gareth Bale');

const bookBO100 = book.bind(boeing, 100);
bookBO100('Wayne rooney');
bookBO100('Phil Foden');

//With Even listeners
ethioAir.planes = 300;
ethioAir.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// ethioAir.buyPlane()

document
  .querySelector('.buy')
  .addEventListener('click', ethioAir.buyPlane.bind(ethioAir));

//Partial Application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.2, 100));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23
// console.log(addVAT(100));


const addTax2 = function (rate) {
  return function (value) {
    console.log(rate, value);
    return (value + value * rate);
  };
};
const addVAT2 = addTax2(0.23)
console.log(addVAT2(100));

In summary, call() and apply() are used to invoke a function and change the value of 
this during the function call, while bind() is used to create a new function with
 a specific value of this.

*/

/*
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1.
Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favorite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2.
Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§Data 1: [5, 2, 3]
§Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀
const poll = {
question: "What is your favorite programming language?",
options: ["0: JavaScript", "1: Python", "2: Rust", "3:
C++"],
// This generates [0, 0, 0, 0]. More in the next section!
answers: new Array(4).fill(0),
};

*/
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  //Task number 1.1
  registerNewAnswer(userPrompt) {
    //Get answer
    const input = Number(
      prompt(
        ` ${this.question}\n ${this.options.join('\n')} \n(Write option number)`
      )
    );
    // console.log(input);

    //REgister answer
    typeof input === 'number' &&
      input < this.answers.length &&
      this.answers[input]++;

    // console.log(this.answers);

    this.displayResults();
    this.displayResults('string');
    // if (input === NaN) {
    //   // console.log(`The input data ${input} is not a number`);
    // } else if (input >= 0 && input <= 3) {
    //   const [index, value] = this.options;
    //   console.log(index, value);
    //   console.log(...this.options);
    //   if (this.options.keys(input) === input) {
    //     this.answers[input]++;
    //     console.log(this.answers[input]);
    //   }
    // }
    // for (const option in this.options) {
    //   if (userPrompt === option) {
    //     console.log(`Your inserted option is ${option}`);
    //   }
    // }
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      //Poll results
      console.log(`Poll results are  ${this.answers.join(', ')}`);
    }
  },
};
// console.log(poll.options);
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
