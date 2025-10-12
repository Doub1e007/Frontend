// 基础类型
let username: string = 'kunkun';
let age_: number = 22;
let sex: boolean = true;
let phone: null = null;     // 不常用
let email: undefined = undefined; // 不常用

// any代表可以任意类型 不推荐
let hobby: any = 'coding';
hobby = 123;
hobby = true;

// 数组
let hobbies: string[] = ['coding', 'reading','rap'];
// let hobbies: Array<string> = ['coding', 'reading', 'rap'];

console.log(`${username}---${age_}---${sex}---${phone}---${email}---${hobby}---${hobbies}---`);