let titleJS = "Hello World";
titleJS = 5;

let userJS = {
    name: "John",
    age: 52
}

console.log(userJS.name);

function funcJS(user) {
    return user.name;
}

const nameJS = funcJS(userJS);
console.log(nameJS);