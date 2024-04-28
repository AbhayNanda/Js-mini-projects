const input = document.getElementById("input")

function revstring(str){
    return str.split("").reverse().join("")
}

function check(){
    const value = input.value
    const reverse = revstring(value)
    
    if(value === reverse){
        alert("PALLINDROME")
    }
    else(
        alert("NOOOOO")
    )
}