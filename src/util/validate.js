// 证邮箱或手机号
// 使用示例
// console.log(validateInput("example@email.com")); // true
// console.log(validateInput("12345678901")); // true
// console.log(validateInput("invalid-input")); // false
export function validateEmail(input) {
    // 邮箱正则表达式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 检查是否为邮箱格式
    if (emailRegex.test(input)) {
        return true;
    }
    // 都不匹配则返回 false
    return false;
}

export function validatePhone(input) {
    // 手机号正则表达式（简化版，仅匹配数字，长度为11位）
    const phoneRegex = /^\d{11}$/;

    // 检查是否为手机号格式
    if (phoneRegex.test(input)) {
        return true;
    }

    // 都不匹配则返回 false
    return false;
}

export function validateEmailOrPhone(input) {
    return validateEmail(input) || validatePhone(input);
}


