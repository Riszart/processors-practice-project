const closeNav = document.querySelector('.close')
const containerClose = document.querySelector(".container-close")

const main = document.querySelector('.main--content')

closeNav.addEventListener("click", lookAndHide)
const burguerIcon = document.querySelector(".burguerIcon")
burguerIcon.addEventListener("click", lookAndHide)

function lookAndHide(){containerClose.classList.toggle('inactive')}

let key
const jisoobp = document.querySelector(".jisoo")
jisoobp.addEventListener("click", ()=>{
  main.classList.remove('inactive')
  clearItem()
  objJisoo.imgPrincipal()
  objJisoo.completeSections()
})

const lisabp = document.querySelector(".lisa")
lisabp.addEventListener("click", ()=>{
  main.classList.remove('inactive')
  clearItem()
  objLisa.imgPrincipal()
  objLisa.completeSections()
})

const rosebp = document.querySelector(".rose")
rosebp.addEventListener("click", ()=>{
  main.classList.remove('inactive')
  clearItem()
  objRose.completeSections()
  objRose.imgPrincipal()
})

const jenniebp = document.querySelector(".jennie")
jenniebp.addEventListener("click", ()=>{
  main.classList.remove('inactive')
  clearItem()
  objJennie.completeSections()
  objJennie.imgPrincipal()
})

function clearItem(){
  objJennie.stopAnimation()
  objRose.stopAnimation()
  objLisa.stopAnimation()
  objJisoo.stopAnimation()
  objJennie.deleteElements()
  objRose.deleteElements()
  objLisa.deleteElements()
  objJisoo.deleteElements()
}