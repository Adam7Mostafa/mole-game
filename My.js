let divs = document.querySelectorAll(".mydiv")
let molediv = document.querySelector(".mole")
let score = document.querySelector(".thescore")
let chosendiv;
//console.log(divs)
function addmole() {
  divs.forEach(function(div) {
    div.classList.remove('mole')
  })
  chosendiv = divs[Math.floor(Math.random() *12)]
  let mole = chosendiv.classList.add("mole")
}

let chmolep = setInterval(addmole, 500)

document.addEventListener("click", mymole)
function mymole(e) {
  if (e.target == chosendiv) {
    score.innerHTML=+score.innerHTML+1
  }
}

let result = document.querySelector(".result")
function movedown() {
  if (+result.innerHTML < 1) {
    clearInterval(countdown)
    clearInterval(chmolep)
    window.alert("game is over your score is: " + score.innerHTML)
    document.removeEventListener("click", mymole)
  }
  result.innerHTML=+result.innerHTML - 1
}
let countdown = setInterval(movedown, 1000)
//clearInterval(chmolep,2000)