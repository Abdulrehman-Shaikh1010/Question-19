/*Dinner Guests: Working with one of the programs from 
Exercises 14 through 18, print a message 
indicating the number of people you are inviting to dinner.*/

let myFriends: string[] = ["Abdulrehman","Yasir","Moiz","Abdullah","Ahmed",];

console.log(`I am Inviting ${myFriends.length} Friends to my Dinner Which are Following \n`);
for(let i = 0; i < myFriends.length; i++){
    console.log(`${i + 1}. ${myFriends[i]}`);
}
