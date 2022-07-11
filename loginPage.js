function checkUser(username, password){
    let passed = 0;
    if (username == '' || password == ''){
        console.log("Fill out all fields!")
        passed = 1
    }
    else if (username.length <= 5 || password.length <=5){
        console.log("Username or Password must be greater than 5 characters!")
        passed = 2
    }
    else{
        location.href =("afterlogin.html")
    }
    console.log(passed)
    return passed;
}

module.exports = checkUser