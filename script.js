function displayvalue(val){
    document.getElementById("display").value= document.getElementById("display").value + val
}
function clearscreen(){
    document.getElementById("display").value = " "
}
function calculate(){
    var userinput = document.getElementById("display").value
    var result = eval(userinput)
    document.getElementById("display").value = result
}