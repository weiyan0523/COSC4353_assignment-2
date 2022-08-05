function checkUser(username, password){
    let passed = 0;
    if (username == '' || password == ''){
        console.log("Fill out all fields!")
        passed = 1
    }
    else{ // no other validation due to not wanting to leak client details :)
        location.href =("afterlogin.html")
    }
    return passed;
}

module.exports = checkUser