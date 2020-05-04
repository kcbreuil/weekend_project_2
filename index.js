let  readlineSync  =  require('readline-sync');

let movement = [ "left", "right"] 
let characters = ["Woody", "Buzz Lightyear"]
let pizza = [ "Slink-a-Roni", "Mr. + Mrs. Potato's Favorite", "Hamm & Cheese"]

console.log("🚀 Thank you for calling PIZZA 🍕 PLANET! 🚀");
console.log(' ');

if (readlineSync.keyInYN("🚀 Would you like to place an order for delivery? 🚀")) {
    // 'Y' key was pressed.
    console.log(' ')
    console.log("Cool! Let's pick your pizza!")
    // Do something...
  } else {
    // Another key was pressed.
    console.log(' ')
    console.log("Oh well that stinks, I guess no pizza party for you tonight")
    process.exit()
    // Do something...
  }

selectedPizza = readlineSync.keyInSelect(pizza, "Choose your pizza!\n");
console.log('Ok, roger that! You want a ' + pizza[selectedPizza] + ' Pizza!\n'); 

selectedCharacter = readlineSync.keyInSelect(characters, "Choose your delivery toy!\n");
console.log('Oki doki, ' + characters[selectedCharacter] + ' is your toy!\n');


if (readlineSync.keyInYN("🚀 Are you ready for blastoff? 🚀")) {
  // 'Y' key was pressed.
  console.log(' ')
  console.log(`OH NO! SID HAS STOLEN YOUR ${pizza[selectedPizza].toUpperCase()} PIZZA!`);
  // Do something...
} else {
  // Another key was pressed.
  console.log(' ')
  console.log(`OH NO! SID HAS STOLEN YOUR ${pizza[selectedPizza].toUpperCase()} PIZZA!`); 
} 
console.log(' ')

console.log(`Looks like he has taken it to his evil toy destroying lair! Help ${characters[selectedCharacter]} find his way outta there!`);

console.log(' ')
console.log(' ')

console.log("WATCH OUT! Here comes Sid\'s crazy dog!")
console.log(' ')
console.log("🌀🌀Choose left or right🌀🌀");

console.log(' ')

function badDog() {
  userChoice = readlineSync.question(`Which way do you wanna run!?:`);
  console.log(' ')
  if (userChoice === 'left') {
    console.log('Good move partner! You\'ve made it past the dog.')
    console.log(' ')
    handleSis();
  } else {
    console.log('Watch it! That dog is getting closer');
    badDog()
  }
}   
badDog();

function handleSis() {
 console.log("Fischer Price! Don't look now but here comes sid's little sister. Make sure she doesn't see you!");
 console.log(' ');
 userChoice = readlineSync.question(`Which way do you wanna run now!? \n
 ${movement[0]} or ${movement[1]}\n`);
 console.log(' ');
  if (userChoice === 'left') {
    console.log('Uh oh! Be careful! She\'s closing in on you')
     console.log(' ');
     handleSis();
} else 
  console.log('⭐⭐Reach for the stars, that was a smart move!!⭐⭐');
  console.log(' ');
  handleDyn();
}
console.log(' ');
 
function handleDyn() {
 console.log(`Look out! We are close to the dynamite launch pad!`)
 console.log(' ');
 userChoice = readlineSync.question(`Which way do you wanna go now!?`);
 console.log(' ');
 if (userChoice === 'left') {
    console.log(`🍕🍕🍕🍕YOU'VE MADE IT OUT OF THERE! GREAT JOB! ${characters[selectedCharacter].toUpperCase()} IS EN ROUTE WITH YOUR ${pizza[selectedPizza].toUpperCase()} PIZZA! 🍕🍕🍕🍕🍕🍕🍕`)
 } else {
     console.log(`Aw man, Sid almost blew ${characters[selectedCharacter]} up!`);
}
}
