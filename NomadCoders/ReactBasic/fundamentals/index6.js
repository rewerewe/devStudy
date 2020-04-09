// #8 forEach
// array의 각각의 item에 대해서 어떤 새로운 동작 실행하는 것. 
// but, return값은 array가 아니다.
let posts = ["Hi", "Hello", "Bye"];

posts.forEach(post => console.log(post));
// retult: 
// Hi
// Hello
// Bye


// #9 include
// 배열에 해당하는 string이 존재하는지 알고 싶을 때.
// 존재하지 않는다면 추가한다. 
let greetings = ["Hi", "Hello", "Howdy", "Suup"];

if (!greetings.includes("Good Morning")) {
  greetings.push("Good Morning");
}

console.log(greetings);
// result: (4) ["Hi", "Hello", "Howdy", "Suup"] --> (5) ["Hi", "Hello", "Howdy", "Suup", "Good Morning"]


// 검색 결과 최신순으로 사용하면 좋을듯! 
greetings.reverse();
console.log(greetings);
// result: (5) ["Good Morning", "Suup", "Howdy", "Hello", "Hi"]


// #10 push 
// 새로운 아이템을 배열에 추가한다.
posts.push("new")

console.log(posts);
// result: (4) ["Hi", "Hello", "Bye", "new"]

