function validationTest(){
    let fA = document.getElementById("input_A").value // field A value
    let fB = document.getElementById("input_B").value // field B value
    let test = fB > fA

    if(test){
        alert("Validation has been successful!");
    }else {
        alert("Validation failed!");
    }
}