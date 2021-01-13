function menuProcess() {
    let menuList = Array.from(document.querySelectorAll(".tab"))    
    let index = menuList.indexOf(this)  	
    menuList.forEach((item, index, array) => { item.classList.remove("tab_active")})
    this.classList.add("tab_active")
    contentList = Array.from(document.querySelectorAll(".tab__content"))
    contentList.forEach((item, index, array) => { item.classList.remove("tab__content_active")})
    contentList[index].classList.add("tab__content_active") 	
}


const menuList = document.querySelectorAll(".tab")
for (let i = 0; i < menuList.length; i++) {
	menuList[i].addEventListener("click",menuProcess)
}
