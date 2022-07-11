

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
        //create user and add to database
    }
    return passed;
}

module.exports = checkNewUser