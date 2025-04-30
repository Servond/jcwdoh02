import { perkalian, pembagian, greet } from "./calculator.js";
import messages from "./message.js";

function pertambahan(a) {
  console.log(a);
}

pertambahan(1);

// CALLBACK

function message() {
  return "Hello";
}

function tampilkan(cb) {
  console.log(cb());
}

tampilkan(message);

function pengurangan(a, b, cb) {
  cb(a - b);
}

function display(a) {
  console.log(a);
}

// const hasil = pengurangan(5,2);
// console.log(display(hasil));

pengurangan(5, 2, display);

console.log(perkalian(2, 2));
console.log(pembagian(4, 2));
console.log(greet);

console.log(messages.welcome());
console.log(messages.halo());

// ASYNCHRONOUS & SYNCHRONOUS

// SYNCHRONOUS
console.log(1);
console.log(2);
console.log(3);

// ASYNCHRONOUS
console.log(1);
setTimeout(() => console.log(2), 3000);
console.log(3);

// PROMISE
const examplePromise = new Promise((resolve, reject) => {
    // console.log(2);
    setTimeout(() => {
        const bool = true;
        if (bool) {
            resolve("success");
        } else {
            reject("error")
        }
    }, 2000)
});

examplePromise.then((res) => console.log(res)).catch((err) => console.log(err)).finally(() => console.log("finally"));

console.log(5);

// ASYNC AWAIT
/**
 * Fetches a random dog image URL from the Dog CEO API and logs it.
 * Handles errors gracefully.
 */
async function exampleAsyncAwait() {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const { message } = await res.json();
        console.log(message);
    } catch (err) {
        console.error('Fetch error:', err);
    }
}

exampleAsyncAwait();