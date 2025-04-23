// COMMAND UNTUK MENJALANKAN QUOKKA
// WINDOWS (CTRL + K) + Q
// MAC (CMND + K) + Q

// CONSOLE INI MENGACU PADA TERMINAL
// LOG DIGUNAKAN UNTUK MENAMPILKAN SEBUAH INFO ATAU MESSAGE
// "HELLO WORLD" ADALAH TEXT YANG AKAN DITAMPILKAN
console.log("Hello World");

// VARIABLE
// SEBUAH STORAGE UNTUK MENAMPUNG DATA

// PENAMAAN VARIABLE
// 1. HANYA BOLEH MENGANDUNG KARAKTER, ANGKA, ATAU SIMBOL $ DAN _
// 2. KARAKTER PERTAMA TIDAK BOLEH SEBUAH ANGKA
// 3. VARIABLE ITU CASE SENSITIVE
// 4. VARIABLE TIDAK BISA MENGGUNAKAN RESERVED WORD
// 5. JIKA NAMA VARIABLE LEBIH DARI 2 KATA
//      - BISA MENGGUNAKAN PASCAL CASE (JenisKelamin)
//      - BISA MENGGUNAKAN SNAKE CASE (jenisKelamin)
//      - BISA MENGGUNAKAN UNDERSCORE (jenis_kelamin)

// DEKLARASI VARIABLE DENGAN CONST
// CONST ATAU CONSTANT ADALAH SEBUAH VARIABLE YANG VALUENYA TIDAK BISA DIRUBAH LAGI
// BISA DIGUNAKAN UNTUK RUMUS ATAU VALUE YANG MEMANG TIDAK INGIN DIRUBAH
const nama = "Budi"; // DEKLARASI
// nama = "John"; // ERROR KARENA INGIN MERUBAH VALUE VARIABLE CONST
console.log(nama);

const umur = 25;
console.log(umur);

// DEKLARASI VARIABLE DENGAN LET
// LET DIGUNAKAN JIKA VALUENYA DAPAT BERUBAH-RUBAH
let alamat;
// let alamat = "Jln"
console.log(alamat);

alamat = "Jln Kedua"
console.log(alamat);

// DEKLARASI VARIABLE DENGAN VAR
var telp = "0211111";
console.log(telp);

// TIPE DATA

// STRING ATAU TEXT
const _string = "1";
console.log(typeof _string);

// NUMBER
const _number = 1;
console.log(typeof _number);

// BOOLEAN (VALUE HANYA TERDIRI DARI 2 OPSI, TRUE OR FALSE)
const _bool = false;
console.log(typeof _bool);

// DATE
const _date = new Date();
console.log(_date);

// NULL
const _null = null;
console.log(_null);

// UNDEFINED
let _undefined;
console.log(_undefined);

// CONCAT ATAU PENGGABUNGAN STRING
const deskripsi = "Hello, " + nama + ", umur kamu " + umur;
console.log(deskripsi);

console.log(1 + 1 + "1" + 5);
let $number = 5;
$number = "15";
console.log($number);

// TEMPLATE LITERAL
const _deskripsi = `Hello, ${nama}, umur kamu ${umur}`;
console.log(_deskripsi);

// BUILD IN METHOD

// STRING BUILD IN METHOD
console.log(_deskripsi.toUpperCase());
console.log("HELLO WORLD".toLowerCase());
console.log("AIUEOA".replace("A", '*'));
console.log(" test@gmail.com ".trim());

// NUMBER BUILD IN METHOD
const angka = 5.15;
console.log(angka.toString());
console.log(angka.toLocaleString("in-Id", {
    style: "currency",
    currency: "IDR"
}))

// GLOBAL BUILD IN METHOD
console.log(parseInt(angka));
console.log(Number(angka))

// DATE BUILD IN METHOD
let tanggal = new Date();
console.log(tanggal);
console.log(tanggal.getDate());
console.log(tanggal.getMonth() + 1);
console.log(tanggal.getFullYear());
console.log(tanggal.toLocaleString("in-ID", { timeZone: 'Asia/Jakarta' }))

// OPERASI MATEMATIKA (UNTUK TIPE DATA NUMBER)
console.log(5 + 5); // operator + atau penambahan
console.log(5 - 5); // operator - atau pengurangan
console.log(5 * 5); // operator * atau perkalian
console.log(5 / 5); // operator / atau pembagian
console.log(5 % 5); // operator % atau modulo atau sisa hasil pembagian
console.log(5 ** 3) // operator ** atau pangkat

// MODIFY IN PLACE
let x = 5;
x += 5; // x = x + 5;

let pesan = "Hello";
pesan += " World"; // pesan = pesan + " World";
console.log(pesan);

console.log(x);
x -= 2; // x = x - 2;
console.log(x);

// INCREMENT & DECREMENT
let y = 1;
y++; // y = y + 1;
console.log(y);

y--; // y = y - 1;
console.log(y);

// POSTFIX
// POSTFIX MENAMPILKAN DULU BARU DI LAKUKAN OPERASI PENAMBAHAN ATAU PENGURANGAN
console.log(y);
console.log(y++);
console.log(y);

// PREFIX
// PREFIX DITAMBAHKAN ATAU DIKURANGKAN DULU BARU DI TAMPILKAN
console.log(y);
console.log(--y);

// PSEUDOCODE
// STEP BY STEP INSTRUCTION UNTUK MEMECAHKAN SEBUAH MASALAH DALAM BAHASA AWAM

// PROBLEM:
// TULIS CODE UNTUK MENCARI AREA DARI PERSEGI PANJANG

// HINT:
// 1. RUMUS AREA PERSEGI PANJANG = PANJANG X LEBAR

// SOLUSI:
// 1. BUAT VARIABLE UNTUK MENAMPUNG PANJANG PERSEGI PANJANG, CTH: CONST PANJANG = 5
// 2. BUAT VARIABLE UNTUK MENAMPUNG LEBAR PERSEGI PANJANG, CTH: CONST LEBAR = 5
// 3. BUAT VARIABLE UNTUK MENAMPUNG RUMUS PERSEGI PANJANG, CONST AREA = PANJANG * LEBAR
// 4. TAMPILKAN VARIABLE YANG MENAMPUNG RUMUS PERSEGI PANJANG DENGAN CONSOLE.LOG