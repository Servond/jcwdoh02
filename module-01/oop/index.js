// OBJECT

const car = {
  // PROPERTIES
  brand: "BMW",
  color: "Metallic Silver",
  model: "DD1",
  transmission: "CVT",

  // METHOD
  start() {
    return "menyalakan mesin";
  },
};

console.log(car.transmission);
car.model = "DD2";
console.log(car.model);
console.log(car["brand"]);
console.log(car.start());

// ? = OPSIONAL

const user = {
  name: "Budi",
  address: {
    kodepos: {
      kecamatan: "Tambora",
      kelurahan: "Tambora",
    },
  },
};

user.name = "John";
console.log(user.name);

console.log(user.address?.kodepos?.kecamatan);

// MUTABLE DAN IMMUTABLE

let nama = "Budi";
nama = "John";
console.log(nama);

const arr = [1, 2, 3, 4, 5];
arr[4] = 6;
console.log(arr);

// IMMUTABLE
// SEMUA PRIMITIVE DATA TYPE

let nama1 = "Budi";
let nama2 = nama1;

nama1 = "John";

console.log(nama1);
console.log(nama2);

// MUTABLE
// SEMUA NON-PRIMITIVE DATA TIPE

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];

arr2[4] = 9;

console.log(arr1);
console.log(arr2);

// DESTRUCTURING ASSIGNMENT

const person1 = {
  name: "Budi",
  birthdate: "2025-01-01",
  gender: "M",
  ktp: "-",
  npwp: "-",
  mobile: "-",
  address: "-",
};

const { name, birthdate, gender, ktp, npwp, mobile, address } = person1;

console.log(person1.name);
console.log(person1.birthdate);
console.log(person1.gender);
console.log(person1.ktp);

console.log(birthdate);
console.log(mobile);
console.log(address);

// CLASS

const listUser = [
  {
    name: "Budi",
    birthdate: "2025-01-01",
    gender: "M",
    ktp: "-",
    npwp: "-",
    mobile: "-",
    address: "-",
    email: "-",
  },
  {
    name: "John",
    birthdate: "2025-01-01",
    gender: "M",
    ktp: "-",
    npwp: "-",
    mobile: "-",
    address: "-",
    email: "-",
  },
  {
    name: "Ria",
    birthdate: "2025-01-01",
    gender: "F",
    ktp: "-",
    npwp: "-",
    mobile: "-",
    address: "-",
    email: "-",
  },
  {
    name: "Tamara",
    birthdate: "2025-01-01",
    gender: "F",
    ktp: "-",
    npwp: "-",
    mobile: "-",
    address: "-",
    email: "-",
  },
];

class User {
  name;
  birthdate;
  gender;
  ktp;
  npwp;
  mobile;
  address;
  email;

  constructor(
    nameParam,
    birthDateParam,
    genderParam,
    ktpParam,
    npwpParam,
    mobileParam,
    addressParam,
    emailParam
  ) {
    this.name = nameParam;
    this.birthDate = birthDateParam;
    this.gender = genderParam;
    this.ktp = ktpParam;
    this.npwp = npwpParam;
    this.mobile = mobileParam;
    this.address = addressParam;
    this.email = emailParam;
  }
}

const user1 = new User(
  "Budi",
  "2025-01-01",
  "M",
  "-",
  "-",
  "-",
  "-",
  "budi@gmail.com"
);
console.log(user1);

const user2 = new User(
  "John",
  "2025-01-01",
  "M",
  "-",
  "-",
  "-",
  "-",
  "john@gmail.com"
);
console.log(user2);

// INHERITANCE

class Product {
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Book extends Product {
    author;

    constructor(name, price, author) {
        super(name, price);
        this.author = author;
    }
}

class Elektronik extends Product {
    brand;

    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
}

const produk1 = new Elektronik("LG SMART TV", 50000, "LG");
console.log(produk1);

const produk2 = new Book("Harry Potter", 29990, "JK Rowling");
console.log(produk2);

// ACCESS MODIFIER

class User1 {
    email;
    #password;

    constructor(email, password) {
        this.email = email;
        this.#password = password;
    }

    #checkEmail(email) {
        return this.email === email
    }

    #checkPassword(password) {
        return this.#password === password;
    }

    login(email, password) {
        const emailValid = this.#checkEmail(email);
        if (!emailValid) return "email salah";

        const passValid = this.#checkPassword(password);
        if (!passValid) return "password salah";

        return { email: this.email, password: this.#password }
    }
}

const userBudi = new User1("budi@gmail.com", "asd123");
console.log(userBudi.login("budi@gmail.com", "asd123"))