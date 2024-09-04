// 값들을 주머니에 담아 사용하기
const SALUTATION = 'Hello,';
let person = '철수';

console.log(SALUTATION, person);


//그다음 퍼슨 변수에 철수에서  영희로 변경
person = '영희';

console.log(SALUTATION, person);


let x = 1;
let y = x;
console.log('변경 전', x, y);

x = 'Hello!';
console.log('변경 후', x, y);

//상수 선언 상수는 값을 다시는 변경할 수 없다.
const PI = 3.14;
console.log('원주율:', PI);

//여러 변수,상수를 한번에 선언하기

// let a = 1;
// let b = 2;
// ... 
let a = 1, b = 2, c = 3;
const X = 4, Y = 5, Z = 6;

console.log(a, b, c);
console.log(X, Y, Z);