const log = document.getElementById("answer");

function generatePassword(){
    var password = "";
    var keyboard = "`1234567890-=qwertyuiop[]asdfghjkl;'\zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:\"|ZXCVBNM<>? ";
    var length = Math.floor(Math.random() * 24) + 16;
    for (var i = 0; i < length; i++){
        password += keyboard.charAt(Math.floor(Math.random() * keyboard.length));
    }
    log.innerHTML = password;
}