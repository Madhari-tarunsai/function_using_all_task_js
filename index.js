
// function fun_name(x)
// {
//     while(x<3){
//         console.log(x)
//         x++;
//     }
// }
// fun_name(1);


// function fun1(y){
// do{
//     console.log(y)
//     y++;
// }
// while(y<2)
// }
// fun1(0)


// function count(x) {
//     do{
//         console.log(x)
//         x--
//     }
//     while(x>0)   
// }
// count(5)

//1.	Write a while and do while loop that prints the numbers from 1 to 5 in the console.
// function num(n){
//     do{
//         console.log(n)
//         n++
//     }
//     while(n<5)
// }
// num(1)


// 2.	How would you exit a while loop if a specific condition is met (e.g., when the number equals 3), Write a example code?
// function exit(x){
//    while(x<=8){
//     console.log(x)
//     if (x === 3) {
        
//         break; 
//     }
//     x++;
//    }
   
// }
// exit(0)


// 8.	Write an if statement that checks if a number is between 10 and 20 or if it's exactly 30, and prints "Condition met" if true.
// function checkNumber(num) {
//     if ((num >= 10 && num <= 20) || num === 30) {
//         console.log("Condition met");
//     }
// }

// // Test cases
// checkNumber(15); // Condition met (15 is between 10 and 20)
// checkNumber(30); // Condition met (30 is exactly 30)
// checkNumber(25); // No output (25 does not meet the condition)
// checkNumber(10); // Condition met (10 is between 10 and 20)

// num(30);
// num(10);



// 6.	Write an if statement that checks if a number is between 10 and 20 (inclusive). Print "In range" if true, otherwise print "Out of range".

// function checkRange(num) {
//     if (num >= 10 && num <= 20) {
//         console.log("In range");
//     } else {
//         console.log("Out of range");
//     }
// }

// // Test cases
// checkRange(15); // In range
// checkRange(25); // Out of range
// checkRange(10); // In range
// checkRange(20); // In range
// checkRange(9);  // Out of range


// 4.	Write a nested if statement that checks if a number is positive and, if true, checks if it's even or odd.
// function evenodd(num){
//     if(num>0){
//         console.log(`${num} is postive`)
//         if(num%2==0){
//             console.log(`${num} is even`)
//         }
//         if(num%2!=0){
//             console.log(`${num} is odd`)
//         }
//     }
// }
// evenodd(3)
 
// 	Write an if-else if-else ladder that checks the value of a variable grade and prints:
// •	"A" for grades 90 and above,
// •	"B" for grades 80 to 89,
// •	"C" for grades 70 to 79,
// •	"F" for grades below 70.

// function grade(marks){
//     if(marks>=100){
//         console.log(`${marks} marks are 90 and above`)
//     }
//     else if(marks>=90){
//         console.log(`${marks} marks are 80 to 89`)
//     }
//     else if(marks>=80){
//         console.log(`${marks} marks are 70 to 79`)
//     }
//     else if(marks>=70){
//         console.log(`${marks} marks are equal to 70`)
//     }
//     else{
//         console.log(`${marks} fail`)
//     }
// }
// grade(50)

// 2.	Write an if-else statement that checks if a number is even or odd, and prints "Even" if it's even, or "Odd" if it's odd.
// function evenodd(num){
//     if(num%2==0){
//         console.log(`${num} is even number`)
//     }
//     else{
//         console.log(`${num} is odd number`)
//     }
// }
// evenodd(56)

// . Rewrite the following code using if else statement:
// let age = 20;
// console.log (age >= 18? "Adult”: "Minor");

// function age(x){
//     if(age>=18){
//         console.log(`${x} is adult`)
//     }
//     else{
//         console.log(`${x}is minor`)
//     }
// }
// age(34)

// function add(){
//     let a=+prompt("enter the value of a:")
//     let b=+prompt("enter the value of b:")
//     let c=a+b
//     console.log(c)
    
    
// }
// add()


