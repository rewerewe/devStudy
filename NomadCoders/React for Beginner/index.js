// #2020-04-05

//함수 선언식
function sayHello(name) {
  console.log("sayHello");
}

//함수 표현식
const sayHello2 = function (name) {
  console.log("sayHello2");
}

// #1 Arrow Function 이렇게도 가능
// args가 하나면 괄호할 필요 없음 
const sayHello = name => "Hello" + name

const button = document.querySelector("button");
button.addEventListener("click", event => console.log(event));


// #2 Template Literals
// backtics를 사용한다. `을 안쓰면 &나 중괄호가 작동하지 않음. 걍 text 되는거임.
// ' (홑따옴표)나 " (쌍따옴표)로 쓰지 않도록 주의.
// JS에서는 쌍따옴표 안쓰는게 좋음
const sayHello = (name = "Human") => `Hello ${name}`;     // default parameter 값이 Human일때.

const meiis = sayHello();     // const meiis = sayHello("human"); default값이 없을 때 함수호출하면서 args 넣는 것과 같음. 
console.log(meiis);


