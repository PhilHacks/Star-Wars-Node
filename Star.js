const prompt = require("prompt-sync")({ sigint: true }); //Kallar på promt-sync

//1. Visa en tom lista
let array = []; ///Skapar en tom array
console.log(array); //Visar array i terminal

// //2.Lägga till en karaktär
let character = prompt("What character to do you wanna add?"); //Ställer fråga och lagrar den under Character
array.push(character); //Lagrar svaret in i array
console.log(array); //Visar uppdaterad array

//6. Lägga till flera karaktär by name
while (true) {
  //Loopar tills användere gör en tom input genom att tryck på enter 2ggr
  let input = prompt("Add multiple characters by entering their name:"); //Input som frågas efter
  if (input === "") {
    break; //Bryter loop då användaren skickat en tom string
  }
  array.push(input); //Namnen från input kommer läggas till i arr
  console.log(array);
}

// //3.Ta bort en karaktär
let index = prompt("Delete a character by entering the index of it (0,1,2):");
array.splice(index, 1); //splice tar bort character på valda index, 1 (antal som ska bort)
console.log(array); //Visar uppdaterad array

//4.Flytta karaktärer inom index
let Index = prompt("Enter the index of the character to move it:(0,1,2..)"); //Frågar användaren om index på karaktären som ska flyttas
let newIndex = prompt("Enter the new index for character:(0,1,2..)"); //Frågar efter det nya index dit character ska flytta

// Omvandlar Index and newIndex till numbers, resercha mer!!!!
Index = Number(Index);
newIndex = Number(newIndex);

let Character = array.splice(Index, 1); // ersätter 1 element på valda index
let element = Character.shift();
array.splice(newIndex, 0, element);
console.log(array);

//5.Ta bort flera karaktärer by name
while (true) {
  //Loopar tills användere gör en tom input genom att tryck på enter 2ggr
  let input = prompt("Remove multiple characters by enter their name:");
  if (input === "") {
    break;
  }
  let index = array.indexOf(input); //Söker igenom array för att se om namnet finns där.
  if (index >= 0) {
    array.splice(index, 1); //Finns namnet så tas det bort genom splice.
    console.log(array);
  }
}

console.log("Trying my first command line push to repo");
