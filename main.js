/*Dinner Guests: Working with one of the programs from
Exercises 14 through 18, print a message
indicating the number of people you are inviting to dinner.*/
var myFriends = ["Abdulrehman", "Yasir", "Moiz", "Abdullah", "Ahmed",];
console.log("I am Inviting ".concat(myFriends.length, " Friends to my Dinner Which are Following \n"));
for (var i = 0; i < myFriends.length; i++) {
    console.log("".concat(i + 1, ". ").concat(myFriends[i]));
}
