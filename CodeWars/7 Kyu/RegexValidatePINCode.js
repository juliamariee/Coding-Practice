function validatePIN(pin) {
    //return true or false
    let pattern = new RegExp("^[0-9]{4,6}$");
    if (pattern.test(pin)) {
        let pattern2 = new RegExp("^[0-9]{5}$");
        if (pattern2.test(pin) == false) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}