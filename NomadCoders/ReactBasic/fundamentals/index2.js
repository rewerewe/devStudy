// #3 Object Destructuring
// object의 property를 변수롤 선언해서 console에서 변수를 확인하는건 비효율적임.
const human = {
  name: 'imme',
  lastName: 'jeong',
  age: 20,
  favFood: {
    breakfast: 'yogurt',
    lunch: 'avosmash',
    dinner: 'bibimmen'
  }
}

// object의 propery or attribute를 변수로 선언하며 꺼내줌. object의 value를 꺼낼때는 {}를 사용.
const { name, lastName, age: wishAge, favFood: { breakfast, lunch, dinner } } = human;

console.log(name, lastName, wishAge, breakfast, lunch, dinner);


// #4 Spread Operator
// two array or object => make one array or object
const day = ['Mon', 'Tue', 'Wed'];
const otherDay = ['Thu', 'Fri', 'Sat'];

// let allDay = day + otherDay;

// console.log(allDay);
// Result --> Mon,Tue,WedThu,Fri,Sat
// 전혀 다른 array, object를 하나로 합쳐서 처리할 일이 많기때문에 React 활용도가 높음.

let allDay = [...day, ...otherDay, 'Sun'];

console.log(allDay);
// Result --> ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]




