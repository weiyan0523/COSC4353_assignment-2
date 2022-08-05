function checkAmount(gRequested, dDate){
    passed = new Boolean(false);

    if (gRequested == ''|| dDate ==''){
        console.log("Fill out all fields!")
    }
    else if (gRequested.length < 1){
        console.log("Gallons Requested must be greater than 0!")
    }
    else if (isNaN(gRequested) == true){
        console.log("Gallons requested should be a number!")
    }
    else{

        var LOCATION_FACTOR_IN_STATE = .02
        var LOCATION_FACTOR_OUT_STATE = .04
        var RATE_HISTORY_FACTOR = .01
        var GALLONS_REQUESTED_FACTOR_GT = .02
        var GALLONS_REQUESTED_FACTOR_LT = .02

    }
    return passed;
}
module.exports = checkAmount
