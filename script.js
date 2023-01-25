'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  const booking = {
    flightNum,
    numPassengers: numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('AB12');
createBooking('AG23',4,1000)
// console.log(bookings);
