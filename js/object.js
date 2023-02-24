class ListItem{
  constructor(keysValues, animation, a){
    this.keysValues = keysValues
    this.animation = animation
    this.a = 0
  }
  completeSections(){
    this.keysValues.forEach((element)=>{
      let keysObj = Object.keys(element)[0]
      let valuesObj = Object.values(element)[0]
      let sectionClass = document.querySelector(keysObj)

      if(keysObj == '.section--Gallery'){
        for(let item in valuesObj){
          const img = document.createElement("img")
          img.setAttribute('src',valuesObj[item])
          img.classList.add("itemInfo")
          sectionClass.appendChild(img)
        }
      }else if(keysObj == '.section--Biography'){
        for(let item in valuesObj){
          const p = document.createElement("p")
          p.innerText = valuesObj[item]
          p.classList.add("itemInfo")
          sectionClass.appendChild(p)
        }
      }else {
        for(const item in valuesObj){
          if(Array.isArray(valuesObj[item])){
            const itemNew = document.createElement("li")
            itemNew.classList.add("itemInfo")
            const itemSpan1 = document.createElement("span")
            itemSpan1.classList.add('itemSpan')
            itemSpan1.innerText = valuesObj[item][0]
            const itemSpan2 = document.createElement("span")
            itemSpan2.innerText = valuesObj[item][1]
            itemNew.append(itemSpan1, itemSpan2)
            sectionClass.appendChild(itemNew)
          }else{
            const itemNew = document.createElement("li")
            itemNew.classList.add("itemInfo")
            itemNew.innerText = valuesObj[item]
            sectionClass.appendChild(itemNew)
          } 
        }
      }
    })
  }

  deleteElements(){
    let items = document.querySelectorAll(".itemInfo")
    for(let item of items){
      item.remove()
    }
  }
  imgPrincipal(){
    const imgItem = document.querySelector(".imgItem")
    imgItem.style.backgroundImage = 'url('+ this.keysValues[1]['.section--Gallery'][1] +')'
    this.a++
    this.animation = setInterval(()=>{
      this.keysValues.forEach((element)=>{
        if(Object.keys(element) == '.section--Gallery'){
          const imgItem = document.querySelector(".imgItem")
          let number = Object.keys(element['.section--Gallery'])
          let urls = Object.values(element['.section--Gallery'])
          if(this.a < number.length-1){
              this.a++
          }else{
              this.a = 0
              number = []
          }
          imgItem.style.backgroundImage = 'url('+ urls[this.a] +')'
        }
      })
    }, 1500)
  }
  stopAnimation(){
    clearInterval(this.animation)
  }
}

const objJisoo = new ListItem(contentJisso)
const objLisa = new ListItem(contentLisa)
const objRose = new ListItem(contentRose)
const objJennie = new ListItem(contentJennie)




