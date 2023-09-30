function isFirstLetterUpper(str) {
    var regex = /^[A-Z]/
    if (regex.test(str)) {
        console.log ("Chuỗi có ký tự đầu tiên là chữ hoa")
    } else {
        console.log ("Chuỗi không có ký tự đầu tiên là chữ hoa")
    }
}