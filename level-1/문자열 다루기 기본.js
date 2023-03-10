// 나의 풀이
function solution(s) {
  return s.length == 4 || s.length == 6 ? /[a-z]/i.test(s)? false : true : false
}

// 다른 풀이
function solution(s) {
  return /^\d{4}$|^\d{6}$/i.test(s)? true : false
}

/**********************************************************
[풀이 후기]

정규표현식으로 문자열 길이 검사하기
1) 문자열이 6개인지 판별
/^{6}$/.test(’1234’) // false
/^.{6}$/.test('123456') //true

2) 주어진 문자열이 4개 또는 6개이고 숫자로만 이루어져있는지 판별하기
/^\d{4}$ | ^\d{6}$/.test('1234') // true
/^\d{4}$ | ^\d{6}$/.test('12345') // false

***********************************************************/