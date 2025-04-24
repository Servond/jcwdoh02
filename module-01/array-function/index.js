// ARRAY
const listNama = ["Budi", "Jonny", "John", "Ria"];
console.log(listNama[2]);

for (let i = 0; i < listNama.length; i++) {
  console.log(listNama[i]);
}

const listAngka = [1, 2, 3, 4];
console.log(listAngka[3]);

const listArray = [[1, 2]];
console.log(listArray[0][1]);

// BUILD IN METHOD ARRAY
console.log(listNama);
console.log(listNama.join(", "));
console.log(listNama.length);
console.log(listNama.reverse());
console.log(listNama.filter((x) => x !== "John"));
console.log(listNama.push("Bean"));
console.log(listNama);

// FOR OF LOOP

for (let nama of listNama) {
  console.log(nama);
}

// FUNCTION

// FUNCTION DECLARATION
console.log(pertambahan(5, 6));

function pertambahan(a, b) {
  console.log("test");
  console.log(a + b);

  return a + b;
}

// PEMANGGILAN FUNCTION
const satuTambahTiga = pertambahan(1, 2);
console.log(satuTambahTiga);

// FUNCTION EXPRESSION

const pengurangan = function (a, b) {
  return a - b;
};

const tigaKurangSatu = pengurangan(3, 1);
console.log(tigaKurangSatu);

// ARROW FUNCTION
const perkalian = (a, b) => {
  return a * b;
};

console.log(perkalian(2, 5));

// FUNCTION SCOPE
const _message = "World";

function message() {
  const hello = "Hello " + _message;
  perkalian(1, 1);
  return hello;
}
// console.log(hello) *error
// *tidak bisa membawa keluar variable atau parameter dari dalam function keluar function itu sendiri

console.log(message());

// DEFAULT PARAMETER

function pembagian(a = 2, b = 4) {
  console.log(a);
  console.log(b);
  return a / b;
}

console.log(pembagian(4));

// REST PARAMETER

function sum(...a) {
  let sum = 0;
  for (let angka of a) {
    sum += angka;
  }
  return sum;
}

console.log(sum(20, 21, 42, 13, 12, 1, 5));

// NESTED FUNCTION

function welcomeMessage(name) {
  function hello() {
    return `Hello ${name}`;
  }

  function content() {
    return "Welcome to Purwadhika";
  }

  return `${hello()} ${content()}`;
}

console.log(welcomeMessage("Budi"));

// CLOSURE

function greet(name) {
  const message = "Hello ";

  return function () {
    return message + name;
  };
}

const greetBudi = greet("Budi");
console.log(greetBudi());

// CURRYING

function sendMessage(message, name) {
  return `${message}, ${name}`;
}

console.log(sendMessage("Hello", "Budi"));
console.log(sendMessage("Hello", "Ria"));

function transformSendMessage(message) {
  return function (name) {
    return `${message}, ${name}`;
  };
}

const helloMessage = transformSendMessage("Hello");
console.log(helloMessage("Budi"));
console.log(helloMessage("Ria"));

// RECURSIVE

function countToTen(number) {
  console.log(number);

  number++;
  if (number <= 10) countToTen(number);
}

console.log(countToTen(1))
