// 类型推论 一般作用在变量初始化，以及函数返回值
let age__ = 18; // 一旦初始化后类型就确定了
// age = 'sing';

let uname__ = 'songjiang';
// uname = 88;

function add123(x: number,y: number) {
    return x + y;
}
console.log(age__ + '--' + uname__);

console.log(add123(1,25));

