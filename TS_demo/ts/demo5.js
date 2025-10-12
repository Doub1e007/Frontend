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
// 复用接口
let stu = {
    name: '武松',
    age: 20,
    say() {
        console.log('爱打老虎。。。');
    }
};
console.log(stu.name + stu.age);
stu.say();
