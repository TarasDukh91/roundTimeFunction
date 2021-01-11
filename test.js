let interval = 10; //minutes interval
const times = []; // time array
let startTime = 0; // start time
let endTime = 3; // end time
let ap = ['AM', 'PM']; // AM-PM

//loop to increment the time and push results in array
for (let i=0;startTime<24*60; i++) {
  var hh = Math.floor(startTime/60); // getting hours of day in 0-24 format
  var mm = (startTime%60); // getting minutes of the hour in 0-55 format
  times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
  startTime = startTime + interval;
}

console.log(times);