// let titleTS: string = "Hello World";
// // titleTS = 5; akan error karena typescript tidak memperbolehkan perubahan tipe data

// interface IUser {
//     name: string,
//     age: number,
//     email: string
// }

// // type User = {
// //     name: string,
// //     age: number
// // }

// let userTS: IUser = {
//     name: "John",
//     age: 52,
//     email: "john@gmail.com"
// }

// console.log(userTS.name);

// function funcTS(user: IUser, number: number): any {
//     return user.name + user.age;
// }

// const nameTS = funcTS(userTS, 5);
// console.log(nameTS);

// const props: {
//     text: string
// } = {
//     text: "test"
// }

// props.text;

// const users = {
//     name: "",
//     age: 1,
//     email: "",
//     password: "",
//     pekerjaan: "",
//     alamatKtp: "",
//     alamatNpwp: "",
//     noHp1: "",
//     noHp2: "",
//     noTelp: ""
// }

// const { name, age, email, password, pekerjaan, alamatKtp} = users;

// name;
// age;
// email;

function pertambahan(a, b) {
    return a + b;
}

console.log(pertambahan(1, 1));
console.log(pertambahan(2, 1));