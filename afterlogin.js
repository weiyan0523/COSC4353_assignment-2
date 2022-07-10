function updateInfo(firstName, lastName, address, city, state, zipcode){

    const passed = new Boolean(false);

    if(firstName == "" || lastName == "" || address == "" || city == "" || state == "" || zipcode == ""){
        alert("Fill out all fields!")
    }
    else{
        //update database
        alert("Update Successful")
        passed = true
    }


    return passed
}

module.exports = updateInfo