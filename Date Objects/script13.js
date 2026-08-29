// Date Objects = Objects that contain values that represent dates
//                dates and times. These date objects can be changed
//                and Formatted.

const date = new Date();
console.log(date);  // It will report the current date and rime.

// Date(year, month, day, hour, mins, seconds, ms)
const date1 = new Date(2025, 0, 1, 13, 52, 53, 5)
console.log(date1)

const date2 = new Date("2024-04-12")
console.log(date2)

// If we want to extract specific Info we can get it.
const year = date.getFullYear();
const month = date.getMonth();
const Day = date.getDate();
const hour = date.getHours();
const Mins = date.getMinutes();
const Secs = date.getSeconds();
const DayofWeek = date.getDay();

console.log(year);
console.log(month);
console.log(Day);
console.log(hour);
console.log(Mins);
console.log(Secs);
console.log(DayofWeek);

console.log(date);

// If we want to set the specific info we can set it:

date.setFullYear(2024);
date.setMonth(0);
date.setDate(12);
date.setHours(5);
date.setMinutes(35);
date.setSeconds(20);

console.log(date);

// We can also compare two date Objects.

