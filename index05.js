console.log(
  0.1 + 0.2,
  0.1 + 0.2 === 0.3
);


let x = 0.1 * 10;
let y = 0.1 + 0.1 + 0.1 + 0.1 + 0.1
  + 0.1 + 0.1 + 0.1 + 0.1 + 0.1;

console.log(
  x, y, x === y
);

// ⭐️ 2의 거듭제곱으로 나눈 수의 계산은 정확
console.log(
  0.25 * 0.5,
  0.5 + 0.25 + 0.125 + 0.125,
  0.0625 / 0.25
);

//불리언 연산자 

console.log(true, typeof true);
console.log(false, typeof false);

console.log(
  true, !true, false, !false
);

console.log(
  true, !true, !!true, !!!true
);

console.log(
  false, !false, !!false, !!!false
);

// 💡 드 모르간의 법칙
let a = true;
// a = false;
let b = true;
// b = false;

console.log(
  !(a && b) === (!a || !b),
  !(a || b) === (!a && !b)
); // 💡 항상 true


let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!');

// 앞의 것이 false일 때만 뒤의 코드 실행이기 떄문에 앞에 것이 
//트루면 뒤에 코드는 그대로 씹히기되어 출력안됨
error || console.log('이상 없음.');


let O = true;
// x = false;

// ⭐️ &&, || 연산자는 값 자체를 반환
let L = O && 'abc';
let z = O || 123;

console.log(y, z);

let D = true;
// x = false;

let J = D ? '참입니다.' : '거짓입니다.';
console.log(J);

let num = 3;

//3의 배수인지 아닌지 알수있는 삼항연산법
console.log(
  'num은 3의 배수' +
  (num % 3 === 0 ? '입니다.' : '가 아닙니다.')
);

// 숫자 0을 제외한 모든숫자, 문자열 모두 트루로 평가된다.
console.log(
  1.23 ? true : false,
  -999 ? true : false,
  '0' ? true : false,
  ' ' ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false,
);

// ⚠️ true와 `같다`는 의미는 아님
console.log(
  1.23 == true,
  ' ' == true,
  {} == true
);
// 숫자 0 공백의 문자열 널 언디파인 난 값은 모두 펄스로 평가된다.
console.log(
  0 ? true : false,
  -0 ? true : false,
  '' ? true : false,
  null ? true : false,
  undefined ? true : false,
  NaN ? true : false,
);

// Q는 공백으로 FALSE W는 회사원문자열로 TRUE E에서 펄스는 반환하지않고 뒤에 트루값만 반환된다.
let Q = '';
let W = '회사원';
let E = x || y;

console.log(E);

// Q는 공백으로 FALSE W는 회사원문자열로 TRUE Q는 뒤에 단기알바 문자열이 TRUE 값으로 반환된다
// W는 이미 회사원문자열인 TRUE 값으로 뒤에 값을 무시하고 회사원만 반환된다.
Q = Q || '단기알바';
W = W || '단기알바';

console.log(Q, W);


// ⭐️ 불린으로 정확하게 변환하려면 두 번 부정하여 해당 boolean값으로 변환해주기
console.log(
  !!1, !!-999, !!'hello',
  !!0, !!'', !!null
);

let K = 11;

console.log(
  'x는 홀수인가?',
!!(K % 2)
);