// #7 Array.filter()
// function을 통과한 모든 원소들과 함께 배열을 생성한다. 

const numbers = [2, 346, 634, 51, 42, 53, 38, 25, 29, 3333, 44, 3, 2, 1, 1, 3, 5, 3, 2, 7, 8, 9];

const testCondition = (number) => number < 15;
const smallerThan15 = numbers.filter(testCondition);
console.log(smallerThan15);
// result: (12) [2, 3, 2, 1, 1, 3, 5, 3, 2, 7, 8, 9]


// filter(function) 함수를 실행한 결과가 true 일때만, 배열로 return.
const biggerThan15 = numbers.filter(number => number > 15);

console.log(biggerThan15);
// result : (10) [346, 634, 51, 42, 53, 38, 25, 29, 3333, 44]


// 검색시 유용할 듯?! 
let posts = ["Hi", "Hello", "Bye"];

posts = posts.filter(post => post !== "Bye");

console.log(posts);
