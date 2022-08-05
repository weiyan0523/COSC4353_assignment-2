function checkNewUser(username, password){
    let passed = 0;
    if (username == '' || password == ''){
        console.log("Fill out all fields!") //to add display
        passed = 1
    }
    else if (username.length <= 5 || password.length <=5){
        console.log("Username or Password must be greater than 5 characters!")
        passed = 2
    }
    else{
        var encrypted = CryptoJS.AES.encrypt(password, "12345"); //12345 = passphrase
        var decrypted = CryptoJS.AES.decrypt(encrypted, "12345");

        console.log("og password = " + password);
        console.log("encrypted = " + encrypted);
        console.log("decrypted and toString = " + decrypted.toString(CryptoJS.enc.Utf8));
    }
    return passed;
}

//module.exports = checkNewUser