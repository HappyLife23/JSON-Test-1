const info = {
    name: 'david',
    age: 28,
    city: 'Gotunburg',

    result: function () {
        console.log(`Your name is David`)
    }
};

console.log(info);
console.log(typeof info.age);
console.log(typeof info);


// omvandla info till ett JSON objekt
const sendJSON = JSON.stringify(info);
console.log('jason: ' + sendJSON );
console.log(typeof sendJSON);

// vi kan inte stringfy function inom JSON



// omvandla info till ett JS-objekt igen
const recieveJSON = JSON.parse(sendJSON);
console.log('Jason parse: ' + recieveJSON);

//––––––––––––––––––––––––––––––––––––– JSON-Övningar–––––––––––––––––––––––––-

//1. Omvandla JavaScript till JSON och vice versa

//1.a Skapa ett JavaScript-objekt som representerar en elev med namn, ålder och en lista med kurser de är inskrivna i. Omvandla objektet till en JSON-sträng, lagra strängen i en variabel och skriv ut den i konsolen.

const userInfo = {
    firstName: 'David',
    lastName: 'Heidari',
    age: 28,
    edujacation: 'Fullstackutvecklare',
    city: 'Gotunburg'
}

console.log(userInfo);




// 1.b Ta den JSON-sträng som skapades i deluppgift A, konvertera den tillbaka till ett JavaScript-objekt och skriv ut det i konsolen.

const sendaJSON = JSON.stringify(userInfo);
console.log("I send JSON: " + sendaJSON);



const taEmot = JSON.parse(sendaJSON);
console.log("tar emot JSON: " + JSON.stringify(taEmot));


// ### 1. Bonusövning

// 1.c För att träna på funktioner, skapa nu två funktioner för de olika uppgifterna ovan. Se till så att du i den första funktionen som tar emot ett JavaScript objekt och omvandlar det till en JSON sträng sedan console.loggar ut JSON strängen i funktionen. 

// Därefter ska den funktionen som return värde kalla på den andra funktionen som omvandlar JSON strängen tillbaks till ett JavaScript objekt och skicka med JSON objektet som ett argument. Använd dig även av en for in loop i den andra funktionen för att visa objektets egenskaper i konsolen.


//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// 2. Skapa ett JSON objekt i en JSON fil

// 2.a Skapa ett JSON-objekt som representerar en skolklass med en lärare som innehåller dess namn och ämne.

// 2.b skapa sedan en array i samma skolklass objektet som innehåller några elever. Eleverna ska ha egenskaper som namn, ålder och en array med favoritämnen.

// ## Extra övning

// Om du hinner klart med de andra två övningarna, prova att skapa en JSON array i din JS fil, omvandla den till en JS array och loopa igenom den med forEach eller for loop.