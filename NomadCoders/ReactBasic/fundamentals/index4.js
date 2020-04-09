// #6 Array.map
// 모든 배열 아이템에 함수를 실행하는 메소드 
// => 함수 결과 값으로 새로운 배열을 만든다.  

// 데이터 포맷 가능. 배열 모든 아이템에 데이터를 추가하고 싶을 때 사용한다.  
// 사용법: API에서 배열을 받으면, 배열의 데이터를 이용하여 component의 배열을 만들게 될 때.

const days = ["Mon", "Tue", "Wed", "Thurs", "Fri"];

// # 함수선언식
const addSmile = (day, index) => `#${index + 1} ${day} `
const addSmileDays = days.map(addSmile);
console.log(addSmileDays);

// # 축약식
const smilingDay = days.map(day => `:) ${day} `);
console.log(smilingDay);