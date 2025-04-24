// 1
let number = 9;
let message = "";

for (let i = 1; i <= 10; i++) {
    message += `${number} x ${i} \n`
}
console.log(message);

// 2
let string = "madam";
let reverseString = string.split("").reverse().join("");
console.log(reverseString);
console.log(string === reverseString ? "palindrome" : "bukan palindrome");

// jawaban mas adi no 2
for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

// 3
let cm = 100000;
let km = cm / 100000;
console.log(km);

// 4
number = 1000;
number = number.toLocaleString("in-ID", {
    style: "currency",
    currency: "IDR"
});
console.log(number);

// 5
string = "Hello World";
let search = "ell";
console.log(string.replace(search, ""));

let searchLength = search.length;
let temp = "";
for (let i = 0; i < string.length; i++) {
    if (temp.length === searchLength) {
        // temp[0] = temp
    }
}

// 6

string = "The QuIcK BrOWn FoX";
let splitString = string.split("");
console.log(splitString);

for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === splitString[i].toUpperCase()) {
        console.log(splitString[i])
        splitString[i] = splitString[i].toLowerCase();
    } else {
        console.log(splitString[i])
        splitString[i] = splitString[i].toUpperCase();
    }
}
console.log(splitString.join(""));

// 7
let angka1 = 270;
let angka2 = 2700;

if (angka1 > angka2) {
    console.log(angka1)
} else if (angka2 > angka1) {
    console.log(angka2);
} else {
    console.log("angka tidak boleh sama");
}
console.log(Math.max(angka1, angka2, 80, 1000, 10000));

// 8

angka1 = 1800;
angka2 = 180;
let angka3 = 18000;

if (angka1 > angka2 && angka1 > angka3) {
    if (angka2 > angka3) {
        console.log(angka3, angka2, angka1);
    } else {
        console.log(angka2, angka3, angka1);
    }
} else if (angka2 > angka1 && angka2 > angka3) {
    if (angka1 > angka3) {
        console.log(angka3, angka1, angka2);
    } else {
        console.log(angka1, angka3, angka2)
    }
} else {
    if (angka1 > angka2) {
        console.log(angka2, angka1, angka3);
    } else {
        console.log(angka1, angka2, angka3)
    }
}

// 9
let input = 1;

if (typeof input === "string"){
    console.log(1);
} else if (typeof input === "number") {
    console.log(2);
} else {
    console.log(3);
}

// 10
input = "An apple a day keeps the doctor away";
console.log(input.replace(/a/gi, "*"));

let splitInput = input.split("");

for (let i = 0; i < splitInput.length; i++) {
    if (splitInput[i].toLowerCase() === "a") {
        splitInput[i] = "*"
    }
}
console.log(splitInput.join(""))