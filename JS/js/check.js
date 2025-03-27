import {checkUsername,checkPhone} from "./checkFn.js";
        // 需求 表单校验--用户名：长度在4-16位 手机号：长度11位
        // 分析 JS事件--鼠标离焦事件blur 表单提交时间submit DOM操作
        // 校验用户名
        // 1.获取dom元素
        let input = document.querySelector('#username');

        input.addEventListener('blur',checkUsername);


        // 校验号码的长度
        let input2 = document.querySelector('#phone');

        input2.addEventListener('blur',checkPhone);

        // 表单提交时 需要校验整个表单是否合法 如果不合法 阻止表单提交
        document.querySelector('form').addEventListener('submit',(event)=>{
            if(!checkUsername() || !checkPhone()){
                event.preventDefault(); // 阻止表单提交
                alert("用户名或手机号不合法");
            }
        })
