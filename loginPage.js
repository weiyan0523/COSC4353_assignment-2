function checkUser(username, password){

    const passed = new Boolean(false);

    if (username == '' || password == ''){
        alert("Fill out all fields!")
    }
    else if (username.length <= 5 || password.length){
        alert("Username or Password must be greater than 5 characters!")
    }
    else{
        location.href =("afterlogin.html")
        passed = true
    }
    return passed;
}
module.exports = checkUser