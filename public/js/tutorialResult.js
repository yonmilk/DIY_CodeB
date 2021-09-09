var data = {
    to16: ['hello codeb\n', 'hellocodeb\n'],
}
function tutorialResult(num, result) {
    
    if(data["to"+num].indexOf(result)!= -1) {
        return true
    } else {
        return false
    }

}
