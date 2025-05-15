// 1
let rectangleLength = 5;
let rectangleWidth = 3;

const rectangleArea = rectangleLength * rectangleWidth;
console.log(rectangleArea);

// 2
const rectanglePerimeter = 2 * (rectangleLength + rectangleWidth);
console.log(rectanglePerimeter);

// 3
let circleRadius = 5;

// diameter
const circleDiameter = 2 * circleRadius;
console.log(circleDiameter);

// circumference
console.log(Math.PI);
const circleCircumference = Math.PI * circleDiameter;
console.log(circleCircumference.toFixed(4));

// area
const circleArea = circleCircumference * circleRadius / 2;
console.log(circleArea.toFixed(4));
// console.log(circleArea.toString().match(/^-?\d+/));

// 4
let triangleArea1 = 80;
let triangleArea2 = 65;

const triangleArea3 = 180 - (triangleArea1 + triangleArea2);
console.log(triangleArea3);

// 5
let daysParam = 735;

const year = Math.floor(daysParam / 365);
console.log(year);

const month = Math.floor((daysParam % 365) / 30);
console.log(month);

const day = (daysParam % 365) % 30;
console.log(day);

console.log(`${daysParam} days -> ${year} year, ${month} month, ${day} day`);

// 6
let date1 = new Date("2022-01-20");
let date2 = new Date("2022-02-28");

const day1 = date1.getDate();
console.log(day1);
const day2 = date2.getDate();
console.log(day2);
console.log(day2 - day1);

console.log(date2)
const dateDiff = (date2 - date1) / (24 * 3600 * 1000);
console.log(dateDiff);

let arr1 = ["apple", "banana", "cherry", "date"];

function q2answer(arr1){
    let arr1answer = arr1.splice(3);
console.log (arr1answer);
console.log (arr1);
   console.log (arr1 + ', and ' + fruitname); 
}
q2answer(arr1);