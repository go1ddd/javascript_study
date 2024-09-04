  d = null;
  console.log(d, typeof d); // ⚠️ 'object' 반환

  const e = Symbol('hello');
  console.log(typeof e); // 이건 나중에

  let isEmployed = true;
  let isMarried = false;

  console.log('직업 있음:', isEmployed);
  console.log('기혼:', isMarried);

  const a = 1 > 2;
  const b = 1 < 2;

  console.log(a, typeof a);
  console.log(b, typeof b);

  console.log(
    typeof (typeof true),
    typeof (typeof 123.45),
    typeof (typeof 'Hello'),
  );

  let x = null;
  console.log(typeof null, typeof x);

  // null 여부는 아래와 같이 확인할 것
  console.log(x === null);

  let job = '학생';

  console.log(job, age);
  console.log(typeof age);

  // 숫자 값이 들어있던 age에 문자열 값을 넣음
  age = '열일곱';

  console.log(age);

  console.log(typeof age);

  // let longName = '김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이';

let longName = '김수한무 거북이와 두루미 \
삼천갑자 동방삭 치치카포 사리사리센타 \
워리워리 세브리깡 무두셀라 구름이 \
허리케인에 담벼락 담벼락에 서생원 \
서생원에 고양이 고양이엔 바둑이 \
바둑이는 돌돌이';

// ⚠️ 줄바뀜 되는 것이 아님
// 큰따옴표도 마찬가지
console.log(longName);

const NAME = '홍길동';
let age = 20;
let married = false;

console.log(
`제 이름은 ${NAME}, 나이는 ${age}세구요, \
${married ? '기혼' : '미혼'}입니다.`
);