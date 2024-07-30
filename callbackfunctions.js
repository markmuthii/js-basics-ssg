// class Student {
//   constructor(first, last, course) {
//     this.firstName = first;
//     this.lastName = last;
//     this.course = course;
//   }
//   getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// const john = new Student("John", "Mugendi", "Software");
// const claire = new Student("Claire", "Wanjiru", "Software Dev");

// console.log(john.getFullName());

// const arr = new Array(4);
const arr2 = [1, 2, 3, 4];

function printElements(el) {
  console.log(el);
}

arr2.map(() => {});

class CustomArray {
  constructor(arrayToBeCreated = []) {
    this.arrayValue = arrayToBeCreated;
  }

  customMap = function (callbackFunction) {
    let returnArray = [];
    for (let i = 0; i < this.arrayValue.length; i++) {
      let newElement = callbackFunction(this.arrayValue[i], i, this.arrayValue);

      returnArray.push(newElement);
    }

    return returnArray;
  };
}

const custArr = new CustomArray([2, 4, 7]);

function mapCallback(value, index, arr) {
  return value + 2;
}

let plusTwo = custArr.customMap(mapCallback);
console.log(plusTwo);

// custArr2.customMap(mapCallback);

// const arr = [5, 7];
// const arr2 = [2, 4];

// function logElements(el, index) {
//   console.log(`${index}: ${el}`);
// }

// arr.map(logElements);

// arr2.map(logElements);
