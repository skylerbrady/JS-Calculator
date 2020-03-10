function display(check) {
    document.getElementById("result").value += check
}

function result() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y

}

function reset() {
    document.getElementById("result").value = ""
}
console.log('calculated!!!!')