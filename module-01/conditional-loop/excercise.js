// 1
let number1 = 200;
console.log(number1 % 2);

if (number1 % 2 === 0) {
  console.log("Angka Genap");
} else {
  console.log("Angka Ganjil");
}

console.log(number1 % 2 === 0 ? "Angka Genap" : "Angka Ganjil");

// 2
let number2 = 7;
let isPrime = true;

if (number2 !== 1) {
  for (let i = 2; i < number2; i++) {
    if (number2 % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime);
} else {
  console.log("Masukan Bilangan selain 1");
}

// 3
let number3 = 5;
let sum = 0;

for (let i = 1; i <= number3; i++) {
    sum += i;
}

console.log(sum);

// Jawaban Mas Anugerah no 3

let Nnumber =3;
let result = (Nnumber*(Nnumber+1))/2;
console.log(result);

//  4
let num4 = 4;
let fact = num4;
let message = `!${num4} -> ${num4} x `

for ( let i = fact - 1; i >= 1; i--) {
    fact *= i
    message += i === 1 ? `${i} = ${fact}` : `${i} x `
}

console.log(message);

// 5
let number5 = 15;
sum = 0;
let n1 = 0;
let n2 = 1;

for (let i = 0; i < number5; i++) {
    console.log(n1);
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
}

console.log(n1);