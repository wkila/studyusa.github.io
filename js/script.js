// rabotaet - ne trogai

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

// == MAIN SCRIPTS == //

const burger = document.getElementById("burger"),
    tabMenu = document.querySelector(".tab-bar"),
    navContainer = document.querySelector("nav"),
    itemsBurger = document.querySelectorAll(".item-burger"),
    submitBtn = document.querySelector(".submit-btn-form"),
    body = document.querySelector("body"),
    contactForm = document.querySelector(".first-form"),
    secondForm = document.querySelector(".second-form"),
    links = document.querySelectorAll("li"),
    line = document.querySelector(".line-cross"),
    containerLins = document.querySelector(".nav-items"),
    tabBurgerMenu = document.querySelector(".tab-burger-menu"),
    backgroundBlack = document.querySelector(".background-black"),
    animBlocks = document.querySelectorAll(".anim-handler")

let currentPos = 0
const navHeight = navContainer.offsetHeight
const animClasses = {
    "left": "left-anim",
    "right": "right-anim",
    "top": "top-anim",
    "bottom": "bottom-anim",
    "height": ""
}

line.style.width = `${links[0].getBoundingClientRect().width}px`
line.style.transform = `translate(${links[0].offsetLeft - line.offsetLeft}px, 5px)`

containerLins.addEventListener("click", switcherLine)
tabMenu.addEventListener("click", tabClick)
body.addEventListener("click", contactHandler)
tabBurgerMenu.addEventListener("click", linkHandler)
burger.addEventListener("click", burgerClick)
navContainer.addEventListener("click", navHandler)
window.addEventListener("scroll", coordHandler)

function coordHandler(event) {
    currentPos = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop

    document.querySelectorAll(".link-item-header").forEach(element => {
        let href = element.getAttribute('href').substring(1)
        if (href != undefined && href != null) {
            let item = document.getElementById(href)
            if (item != null) {
                let coord = (item.getBoundingClientRect().top).toFixed(0)
                if (currentPos / 4 > coord && !item.classList.contains("scrolled") && coord < 50) {
                    const activeLink = element
                    const widthActive = activeLink.getBoundingClientRect().width
                    
                    if (item.getAttribute("ID") === href) {
                        item.classList.add("scrolled")
                        line.style.width = `${widthActive}px`

                        const width = activeLink.offsetLeft - line.offsetLeft
                        line.style.transform = `translate(${width}px, 5px)`
                    }
                }else if((coord * (-1)) < 50 && item.classList.contains("scrolled")) {
                    const activeLink = element
                    const widthActive = activeLink.getBoundingClientRect().width
                    
                    if (item.getAttribute("ID") === href) {
                        item.classList.remove("scrolled")
                        line.style.width = `${widthActive}px`

                        const width = activeLink.offsetLeft - line.offsetLeft
                        line.style.transform = `translate(${width}px, 5px)`
                    }
                }
            }
        }
    })

    animBlocks.forEach(element => {

    }) 
}

function burgerClick(event) {
    let item = event.target
    
    if(item.classList.contains("burger") || item.classList.contains("line-burger") || item.classList.contains("burger-menu")) {
        burger.classList.toggle("handleActive")
        tabMenu.classList.toggle("handleActive")
        backgroundBlack.classList.toggle("handleActive")
    }
}

function linkHandler(event) {
    event.preventDefault()
    let item = event.target

    if (item.nodeName === "A") {
        backgroundBlack.classList.toggle("handleActive")
    }
}

function tabClick(event) {
    event.preventDefault

    const activeTab = event.target
    if (activeTab.nodeName === "A") {
        slowScroll(activeTab)
        
        activeTab.parentElement.classList.add("active")

        itemsBurger.forEach(element => {
            element !== activeTab.parentElement ? element.classList.remove("active") : false
        })

        burger.classList.toggle("handleActive")
        tabMenu.classList.toggle("handleActive")
    }
}
let secondFormClick = false
let firstFormClick = false

function contactHandler(event) {
    let item = event.target

    if (item.classList.contains("contact-btn")) {
        if (item.classList.contains("second-form-btn")) {
            secondForm.style.display = "block"
            secondForm.classList.toggle("activeContact")
            secondFormClick = true

        }else {
            contactForm.style.display = "block"
            contactForm.classList.toggle("activeContact")
            firstFormClick = true
        }

    }else if (item.classList.contains("contact-form")){
        console.log("contact form", secondFormClick, firstFormClick)
        if (firstFormClick) {
            contactForm.classList.toggle("activeContact")
            contactForm.style.display = "none"
            firstFormClick = false
        }else if(secondFormClick) {
            secondForm.classList.toggle("activeContact")
            secondForm.style.display = "none"
            secondFormClick = false
        }
    }
}

function switcherLine(event) {
    
    const activeLink = event.target
    const widthActive = activeLink.getBoundingClientRect().width

    if (activeLink.nodeName === 'A') {
        slowScroll(activeLink)
        line.style.width = `${widthActive}px`

        const width = activeLink.offsetLeft - line.offsetLeft
        line.style.transform = `translate(${width}px, 5px)`
    }
}

function navHandler(event) {
    event.preventDefault()

    let link = event.target

    if (link.classList.contains("link-item")) {
        slowScroll(link)
    }
}

function slowScroll(link) {
    let href = link.getAttribute('href').substring(1)

    const scrollTarget = document.getElementById(href)
    const elementPosition = scrollTarget.getBoundingClientRect().top

    if (currentPos === 0) {
        currentPos = elementPosition
    }else if (currentPos < elementPosition) {
        currentPos = (elementPosition + currentPos)
    }else if (currentPos > elementPosition) {
        currentPos = (currentPos + elementPosition)
    }

    window.scrollTo({
        top: currentPos,
        behavior: 'smooth'
    })
}







