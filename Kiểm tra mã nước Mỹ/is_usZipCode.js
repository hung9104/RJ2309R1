function is_usZipCode(str) {
    var regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regex.test(str)) {
        return true;
    } else {
        return false;
    }
}