var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let initialDay = Number(lines.shift().split(' ')[1])
let [iHour, iMinutes, iSeconds] = lines.shift().split(' : ')
iHour = Number(iHour)
iMinutes = Number(iMinutes)
iSeconds = Number(iSeconds)
let finalDay = Number(lines.shift().split(' ')[1])
let [fHour, fMinutes, fSeconds] = lines.shift().split(' : ')
fHour = Number(fHour)
fMinutes = Number(fMinutes)
fSeconds = Number(fSeconds)
let differenceInMinutes = 0;
let differenceInSeconds = 0;
let differenceInDays = 0;


if (iHour > fHour) {
    differenceInHours = (24 - iHour) + fHour
} else {
    differenceInHours = fHour - iHour
}

if (iMinutes > fMinutes) {
    differenceInMinutes = (60 - iMinutes) + fMinutes
} else {
    differenceInMinutes = fMinutes - iMinutes
}


if (iSeconds > fSeconds) {
    differenceInSeconds = (60 - iSeconds) + fSeconds
} else {
    differenceInSeconds = fSeconds - iSeconds
}

let totalDifference = convertHourToSeconds(differenceInHours) + convertMinutesToSeconds(differenceInMinutes) + differenceInSeconds
let formattedHour = convertSecondsToHourMinutesAndSeconds(totalDifference)

if (initialDay > finalDay) {
    differenceInDays = (30 - initialDay) + finalDay
} else {
    differenceInDays = (finalDay - initialDay) - 1
}

console.log(`${differenceInDays} dia(s)\n
${formattedHour.hour} hora(s)\n
${formattedHour.minutes} minuto(s)\n
${formattedHour.seconds} segundo(s)`)


function convertSecondsToHourMinutesAndSeconds(seconds) {
    var hours = Math.floor(seconds / (60 * 60));
    var remaning = seconds % (60 * 60);
    var minutes = Math.floor(remaning / 60);
    remaning %= 60;
    seconds = Math.ceil(remaning);

    var formattedHour = {
        "hour": hours,
        "minutes": minutes,
        "seconds": seconds
    };
    return formattedHour;
}

function convertHourToSeconds(hour) {
    let seconds = Number(hour) * 3600;
    return seconds;
}


function convertMinutesToSeconds(minutes) {
    let seconds = Number(minutes) * 60;
    return seconds;
}