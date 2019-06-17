function validTime(timeString){
    if (timeString.match(/^[0-9]*:[0-9]*$/)) {
        let timeArray = timeString.split(":");
        if (parseInt(timeArray[0]) > 23 || parseInt(timeArray[0]) < 0 || parseInt(timeArray[1]) > 59 || parseInt(timeArray[1]) < 0) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}