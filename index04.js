//문자열을 비교할때 js는 단따옴표 쌍따옴표 백틱을 구분하지 않음
console.log(
  '안녕하세요~' === "안녕하세요~",
  '안녕하세요~' === `안녕하세요~`,
  "안녕하세요~" === `안녕하세요~`,
);

console.log(
  '1' == '1',
  '1' == 1,
  '1' == 2
);

console.log(
  '1' != '1',
  '1' != 1,
  '1' != 2
);

console.log(
  '1' === '1',
  '1' === 1,
  '1' === 2
);

console.log(
  '1' !== '1',
  '1' !== 1,
  '1' !== 2
);

// ⚠️ 숫자 문자열 관련 주의!
console.log(
  100 > 12, // 숫자는 그 자체로 비교
  '100' > '12', // 문자는 사전순으로 비교
  '100' > 12, // 문자와 숫자를 비교연산자를 쓰면 문자를 숫자로 변환
);

//다른 자료형과 더하면 문자열 반환
let result = '안녕' + 1 + true;

console.log(result);
console.log(typeof result);

// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음 다 넘버로 치환됨
let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(
  typeof integer,
  typeof real,
  typeof negative
);

//인피니티 값이 존재함
let i = 1 / 0;
console.log(i, typeof i);


//⭐️ 주어진 값이 NaN인지 여부 확인하는 방법
let x = 1 / 'abc';

console.log(
  x,
  x == NaN,
  x === NaN,
  isNaN(x), // 숫자가 아닐 시 true
  Number.isNaN(x) // 보다 엄격한 버전
);


// 널리 사용되는 홀수와 짝수의 판별법
console.log(
  '홀수 ',
  123 % 2,
  55 % 2,
  999 % 2
);
console.log(
  '짝수 ',
  2 % 2,
  100 % 2,
  8 % 2
);


let c = 3;
let b = 4;

// 💡 부수효과가 일어나는 시점
console.log(c-- * --b, c, b);

console.log(
  +'100',
  -'100',
  +'abc' // 숫자로 변환될 수 없는 문자열 산술연산자를 문자열에 쓰면 숫자로 자동 반환됨.
);