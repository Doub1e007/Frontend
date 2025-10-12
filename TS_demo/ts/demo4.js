// 函数类型
// 定义函数
let add = (x, y) => {
    return x + y;
};
// let add2 = function(x: number,y: number): number{
//     return x + y;
// }
// 调用函数 -- 注意参数个数只能和指定的个数一致
let res = add(10, 20);
console.log(res);
// ? 代表可选参数
let getFullName = function (firstName, lastName) {
    if (lastName) {
        console.log(`${firstName}.${lastName}`);
    }
    console.log(`${firstName}`);
};
getFullName('Tim', 'Cook');
getFullName('Jerry');
