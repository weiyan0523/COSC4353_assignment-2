function checkAmount(gRequested, dDate){
    passed = new Boolean(false);

    if (gRequested == ''|| dDate ==''){
        console.log("Fill out all fields!")
    }
    else if (gRequested.length < 1){
        console.log("Gallons Requested must be greater than 0!")
    }
    else{
        console.log(gRequested)
        console.log(dDate)
        passed = true
    }
    console.log(passed)
    return passed;
}
module.exports = checkAmount
