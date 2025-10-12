// 联合类型
let arr : (string | number | boolean)[] = ['A','B','C',18,20,true];

// 起别名
type strNumBooArr = (string | number | boolean)[]
let arr1 : strNumBooArr = ['AA','BB','CC',18,20,true];
let arr2 : strNumBooArr = ['AAA','BBB','CCC',18,20,true];

console.log(arr);
console.log(arr1);
console.log(arr2);