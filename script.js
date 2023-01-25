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

*/

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

document.querySelector('.buy').addEventListener('click', ethioAir.buyPlane);
