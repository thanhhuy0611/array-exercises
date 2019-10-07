const inventors = [
    'Albert Einstein',
    'Issac Newton',
    'Galileo Galilei',
    'Marie Curie',
    'Johannes Kepler',
    'Nicolaus Copernicus',
    'Max Planck',
    'Katherine Blodgett',
    'Ada Lovelace',
    'Sarah E. Goode',
    'Lise Meitner',
    'Hanna Hammarstrom'
];
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//-------------------Mil 7: Find / FindIndex----------------------------------------------------------------------
//Find the inventor that has a middle name.
let hasMiddleName = inventors.find((inventor)=>{
    let inventorCuted = inventor.replace(" ","").replace(" ","");
    let space = inventor.length - inventorCuted.length;
    if(space > 1) {
        return inventor
    }
})
console.log(hasMiddleName)

//Bonus: Return a new array without inventor with a middle name.
let hasNotMiddleName = inventors.filter((inventor)=>{
    return inventor !== hasMiddleName;
})
console.log(hasNotMiddleName);

//-------------------Mil 6----------------------------------------------------------------------
//Does any inventor have the letter 'y' in their name?
let isNameHasY = inventors.some((inventor)=>{
    let thereIsY = false;
    let chars = inventor.split("");
    chars.some((char)=>{
        if(char === "y" || char === "Y"){
            thereIsY = true;
        }
    });
    if (thereIsY) {return true};
});
console.log(isNameHasY);
//Does every inventor have the letter 'e' in their name?
let isEveryNameHaveE = inventors.every((inventor)=>{
    chars = inventor.split("");
    let everyHasE = false;
    everyHasE = chars.some((char)=>{
        if (char === "e" || char ==="E"){
            return true;
        }
    })
    if (everyHasE) {return true};
    console.log(everyHasE);
})
console.log(isEveryNameHaveE);
//Does every inventor have first name that's longer than 4 characters?
let isEveryNameLonger4 = inventors.every((inventor)=>{
    apartOfNames = inventor.split(" ");
    return apartOfNames[0].length > 4;
})
console.log(isEveryNameLonger4)



//-------------------Mil 5----------------------------------------------------------------------
//Find the sum of all the numbers.
let sumArray = numbers.reduce((total, number) => {
    return total + number;
}, 0);
console.log(sumArray);

// Find the sum of all the even numbers.
let sumEven = numbers.reduce((total, number) => {
    if (number % 2 === 0) {
        return total + number;
    } else {
        return total;
    }
}, 0)
console.log(sumEven);

// Create a string that has the first name of every inventor.
let firstNameArray = inventors.map((inventor)=>{
    return inventor.split(" ");
})
console.log(firstNameArray)
let stringsFirstName = firstNameArray.reduce((total, inventor) => {
    return total + inventor[0] + " ";
}, "")
console.log(stringsFirstName);


//--------------Mil 4---------------------------------------------------------------------
//------ A-Z.
let nameAToZ = inventors.sort((a, b) => {
    if (a > b) { return 1 };
    if (a < b) { return -1 };
    return 0;
})
console.log(nameAToZ)

//-----Z-A.
let nameZtoA = inventors.sort((a, b) => {
    if (a > b) { return -1 };
    if (a < b) { return 1 };
    return 0;
})
console.log(nameZtoA);
//----length of name, shortest name first
let shortestName = inventors.sort((a, b) => {
    lengthA = a.replace(" ", "").length;
    lengthB = b.replace(" ", "").length;
    if (lengthA > lengthB) { return 1 };
    if (lengthA < lengthB) { return -1 };
    return 0;
})
console.log(shortestName)
//----length of name, longest name first
let longestName = inventors.sort((a, b) => {
    lengthA = a.replace(" ", "").length;
    lengthB = b.replace(" ", "").length;
    if (lengthA > lengthB) { return -1 };
    if (lengthA < lengthB) { return 1 };
    return 0;
})
console.log(shortestName)




//-------------Mil 3-------------------------------------------------------------------------
//----------first name of each inventor.
let printFirstName = (name) => {
    let nameSplited = name.split(" ");
    return nameSplited[0];
}
let firstName = inventors.map(printFirstName)
console.log(firstName);

//-----------length of every inventor's full name.
let printLengthName = (name) => {
    let nameNoSpace = name.replace(" ", "");
    return nameNoSpace.length;
}
let lengthNameArr = inventors.map(printLengthName);
console.log(lengthNameArr);
//--------- inventors' names in uppercase.
let uppercaseName = (name) => {
    return name.toUpperCase();
}
let nameIsUppercased = inventors.map(uppercaseName);
console.log(nameIsUppercased)

//-------- initials of all inventors
let initialsName = inventors.map((name) => {
    let apartOfNames = name.split(" ");
    let letter = apartOfNames.map((apartOfName) => {
        return apartOfName[0];
    })
    console.log(letter)
    let combineLetters = letter.toString();
    let result = combineLetters.replace(",", ".")
    return result;
})
console.log(initialsName);

//------ multiplied by 100.
let arrayMultiplied100 = numbers.map((number) => {
    return number * 100;
})
console.log(arrayMultiplied100)

//------ powers of two
let arrayPowerOfTwo = numbers.map((number) => {
    return Math.pow(number, 2)
})
console.log(arrayPowerOfTwo);

//----------


//----------------Mil 2------------------------------------------------------------------------
//----start with A
let nameStartWithA = inventors.filter((name) => {
    return name[0] === "A";
});
console.log(nameStartWithA);

//-----contain "n"
let nameContainN = inventors.filter((name) => {
    return name.includes("n");
})
console.log(nameContainN);

//------has the same letter twice in a row 
let nameHasSameLetterTwice = inventors.filter((name) => {
    let isNameRepeat = false;
    let chars = name.split("");
    let isCharsRepeat = chars.filter((char, i) => {
        if (char === char + i) {
            return true;
        }
    })
    if (isCharsRepeat) { isNameRepeat = true; }
    if (isNameRepeat) { return true };
})
console.log(nameHasSameLetterTwice)

//-------------array of the numbers which are odd.
let oddArray = numbers.filter((number) => {
    if (number % 2 === 1) {
        return true;
    }
})
console.log(oddArray);

//--------------have two digits.
let numberTwoDigits = numbers.filter((number) => {
    let numberOfNumber = number.toString();
    if (numberOfNumber.length === 2) { return true }
})
console.log(numberTwoDigits)

//--------------numbers which are prime.
let checkNumberPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
let primeNumber = numbers.filter(checkNumberPrime);
console.log(primeNumber);

//---------------------