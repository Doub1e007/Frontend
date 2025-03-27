// 使用export导出函数
export let checkUsername = ()=>{
    let flag = true; // 标记是否合法
    let usernameValue = document.querySelector('#username').value;
    // alert(usernameValue);
    // 校验用户名的长度
    if(!/\w{4,16}/.test(usernameValue)){
        // alert("用户名不合法");
        document.querySelector('#name_msg').innerHTML = "用户名不合法";// 修改span的内容
        flag = false;
    }else{
        document.querySelector('#name_msg').innerHTML = "";
    }
    return flag;
}

export let checkPhone = ()=>{
    let flag = true; // 标记是否合法
    let phoneValue = document.querySelector('#phone').value;

    if(!/^1[3-9]\d{9}$/.test(phoneValue)){
        document.querySelector('#phone_msg').innerHTML = "手机号不合法";// 修改span的内容
        flag = false;
    }else{
        document.querySelector('#phone_msg').innerHTML = "";
    }
    return flag;
}