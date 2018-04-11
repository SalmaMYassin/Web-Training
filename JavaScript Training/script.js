//alert("Helllloooo!");
//var name = prompt("What's your name?")
//var lastName = prompt("What's your last name?")
//var age = prompt("How old are you?")
//console.log("You've now lived " + Math.floor(age * 365.25) + " days")
//
//var num = 48;
//var input = prompt("Can you guess the number?");
//while (input != num) {
//    if (input > num)
//        alert("too High");
//    else if (input < num)
//        alert("Too Low");
//
//    input = prompt("Guess Again?");
//}
//
//alert("You Guessed it!");

console.log("All numbers between -10 and 19");
for (var i = -10; i <= 19; i++) {
    console.log(i);
}

console.log("Even Numbers between10 and 40");
for (var i = 10; i <= 40; i++) {
    if (i % 2 == 0)
        console.log(i);
}

console.log("All Odd numbers between 300 and 333")
for (var i = 300; i <= 333; i++) {
    if (i % 2 == 1)
        console.log(i);
}

console.log("All numbers divisible by 5 and 3 between 5 and 50")
for (var i = 5; i <= 50; i++) {
    if (!(i % 5) && !(i % 3))
        console.log(i);
}