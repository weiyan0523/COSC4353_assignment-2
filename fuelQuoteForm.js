function checkAmount(gRequested, dDate){
    const passed = new Boolean(false);

    if (gRequested == ''|| dDate ==''){
        alert("Fill out all fields!")
    }
    else if (gRequested.length < 1){
        alert("Gallons Requested must be greater than 0!")
    }
    else{
        console.log(gRequested)
        console.log(dDate)
    }
    console.log(passed)
    return passed;
}

