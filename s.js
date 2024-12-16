const pageOne = document.getElementById("pageOne")
const pageTwo = document.getElementById("pageTwo")
const pageThre = document.getElementById("pageThre")
const pageFour = document.getElementById("pageFour")
const pageFive = document.getElementById("pageFive")

function foter(div){
    if(div == pageOne){
        document.location.href = "farm_page.html"
        pageOne.classList.add("active")
        pageThre.classList.remove("active")
        pageFour.classList.remove("active")
        pageTwo.classList.remove("active")
        pageFive.classList.remove("active")
        pageOne.style.transition = "1" + "s"
    }else if(div == pageTwo){
        pageOne.classList.remove("active")
        pageThre.classList.remove("active")
        pageFour.classList.remove("active")
        pageFive.classList.remove("active")
        pageTwo.classList.add("active")
        document.location.href = "tasks.html"
    }else if(div == pageThre){
        pageOne.classList.remove("active")
        pageThre.classList.add("active")
        pageFour.classList.remove("active")
        pageTwo.classList.remove("active")
        pageFive.classList.remove("active")
        document.location.href = "referal_page.html"
    }
    else if(div == pageFour){
        pageOne.classList.remove("active")
        pageThre.classList.remove("active")
        pageFour.classList.add("active")
        pageTwo.classList.remove("active")
        pageFive.classList.remove("active")
        document.location.href = "connect_wallet.html"
        
    }
    else if(div == pageFive){
        pageOne.classList.remove("active")
        pageThre.classList.remove("active")
        pageFour.classList.remove("active")
        pageTwo.classList.remove("active")
        pageFive.classList.add("active")
    }
}

