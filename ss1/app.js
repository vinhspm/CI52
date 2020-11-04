
let ans1 = document.querySelector("#ans1")
let ans2 = document.querySelector("#ans2")
let anss = document.querySelector('#answers')
ans1.innerHTML = "yes"
ans2.innerHTML = "no"
ans1.addEventListener("click", output)
ans2.addEventListener("mouseover", change2)
// ans1.addEventListener("mouseover", change1)
function output() {
    alert("i love you")
}

function change2() {
    
    console.log(anss)
}
