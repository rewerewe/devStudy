// #5 Classes
// React Component는 모두 class 다.

class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    // this는 이 class를 참조한다는 뜻.
  }
}

class Baby extends Human {
  cry() {
    console.log("Waaaaaaa");
  }

  sayName() {
    console.log(`My name is ${this.name}`)
  }
}

const meiis = new Human("Imme", "Jeong");
// constructor는 Class를 생성할 때 필요한 무언가 가지고 있다.
// Class는 constructor의 이부분을 확장할 수 있다.
console.log(meiis.name);


const myBaby = new Baby("mini", "kim");
console.log(myBaby.cry(), myBaby.sayName());

