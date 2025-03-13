const currentDate = new Date();
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const currentHour = currentDate.getHours();

let greeting;
if (currentHour >= 1 && currentHour <= 12) {
    greeting = "Good Morning";
} else if (currentHour >= 13 && currentHour <= 16) {
    greeting = "Good Afternoon";
} else if (currentHour >= 17 && currentHour <= 19) {
    greeting = "Good Evening";
} else if (currentHour >= 20 && currentHour <= 23) {
    greeting = "Good Night";
} else {
    greeting = "Invalid time";
}

console.log(`Time Zone: ${timeZone}`);
console.log(greeting);
