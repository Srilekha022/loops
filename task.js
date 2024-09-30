//1.write a program to print 10 numbers using for loop and write same program suing while and do-while loop?
//using for loop
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
//using while loop
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
// //using do-while loop
var i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);


//2.2.write a program to print even numbers using for loop and write same program suing while and do-while loop?
//using for loop
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//using while loop
var i = 1;
while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}
//using do-while loop
var i = 1;
do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 10);


//3.write a program to print odd numbers using for loop and write same program suing while and do-while loop?
//using for loop
for (var i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//using while loop
var i = 1;
while (i <= 10) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
//using do-while loop
var i = 1;
do {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
} while (i <= 10);

//4.write a program to console the marks grade D using conditional statements and the marks for D grade is b/w the 35 and 45 ?
var marks = 75; 

if (marks >= 91) {
    console.log("Grade: A");
} else if (marks >= 70 && marks < 91) {
    console.log("Grade: B");
} else if (marks >= 55 && marks < 70) {
    console.log("Grade: C");
} else if (marks >= 35 && marks < 55) {
    console.log("Grade: D");
} else {
    console.log("Grade: F (Fail)");
}
