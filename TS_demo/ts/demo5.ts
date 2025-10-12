// 对象类型
// let stu: {name: string,age: number,say(): void} = {
//     name: '李逵',
//     age: 18,
//     say() {
//         console.log('喜欢宋江。。。');
//     },
// }
// console.log(stu.name + stu.age);
// stu.say();

// 接口类型
interface User {
    name: string,
    age: number,
    say?(): void
}

// 复用接口
let stu: User = {
    name: '武松',
    age: 20,
    say() {
        console.log('爱打老虎。。。');
    }
}
console.log(stu.name + stu.age);
stu.say();