function checkUser(username, password){
    const passed = new Boolean(false);
    if (username == '' || password == ''){
        console.log("Fill out all fields!")
    }
    else if (username.length <= 5 || password.length <=5){
        console.log("Username or Password must be greater than 5 characters!")
    }
    else{
        location.href =("afterlogin.html")
        passed = true
    }
    console.log(passed)
    return passed;
}


// const functions = {
//     check:(username == '',passoword == '') => alert("Fill out all fields!")
// };
module.exports = checkUser