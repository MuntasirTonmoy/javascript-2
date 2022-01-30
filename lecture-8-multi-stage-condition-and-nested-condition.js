//* multi stage coditional
var cgpa = [4, 3.5, 3, 2.5, 2, 0];
var marks = 39;

if (marks <= 100 && marks >= 80) {
    console.log('Your cgpa is ' + cgpa[0]);
}
else if (marks <= 79 && marks >= 70) {
    console.log('Your cgpa is ' + cgpa[1]);
}
else if (marks <= 69 && marks >= 60) {
    console.log('Your cgpa is ' + cgpa[2]);
}
else if (marks <= 59 && marks >= 50) {
    console.log('Your cgpa is ' + cgpa[3]);
}
else if (marks <= 49 && marks >= 40) {
    console.log('Your cgpa is ' + cgpa[4]);
}
else {
    console.log('Your cgpa is ' + cgpa[5]);
}

//* nested conditional
// Leap year in nested 
var year = 2024;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log('Leap Year.');
        }
        else {
            console.log('Not leap year');
        }
    }
    else {
        console.log('Leap year');
    }
}
else {
    console.log('Not leap year');
}

// TODO. Search google about comparison operator in Javascript