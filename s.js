const pageOne = document.getElementById("pageOne")
const pageTwo = document.getElementById("pageTwo")
const pageThre = document.getElementById("pageThre")
const pageFour = document.getElementById("pageFour")

function foter(div){
    if(div == pageOne){
        pageOne.classList.add("active")
        pageThre.classList.remove("active")
        pageFour.classList.remove("active")
        pageTwo.classList.remove("active")
    }else if(div == pageTwo){
        pageOne.classList.remove("active")
        pageThre.classList.remove("active")
        pageFour.classList.remove("active")
        pageTwo.classList.add("active")
    }else if(div == pageThre){
        pageOne.classList.remove("active")
        pageThre.classList.add("active")
        pageFour.classList.remove("active")
        pageTwo.classList.remove("active")
    }
    else if(div == pageFour){
        pageOne.classList.remove("active")
        pageThre.classList.remove("active")
        pageFour.classList.add("active")
        pageTwo.classList.remove("active")
    }
}

