
// функция добавления товара в корзину
function addProduct() {
	let imgSrc = this.closest(".product").querySelector(".product__image").src;
	let id = this.closest(".product").dataset.id;
	// проверка наличия в корзине добавляемого товара 
	allTrayProducts = document.querySelectorAll(".cart__product");
	for (let i = 0; i < allTrayProducts.length; i++) {
		if (allTrayProducts[i].dataset.id == id) {			
			return 
		}
	}		
	let qtyProduct = this.closest(".product").querySelector(".product__quantity-value").textContent;
	const insertText = ` <div class="cart__product" data-id=${id}>
  							  <img class="cart__product-image" src=${imgSrc}>
    							<div class="cart__product-count">${qtyProduct}</div>
						</div> `
	tray = document.querySelector(".cart__products"); 					
	tray.insertAdjacentHTML("beforeEnd",insertText);

}

// функция изменения количества товара в корзине
function incDecTray(idProduct, newQty) {
	allTrayProducts = document.querySelectorAll(".cart__product");
	for (let i = 0; i < allTrayProducts.length; i++) {
		if (allTrayProducts[i].dataset.id == idProduct) {
			allTrayProducts[i].querySelector(".cart__product-count").textContent = newQty;
			return 
		}
	} 

}


// функция изменения количества товара в каталоге
function incDecProcess() {
	currentQty = Number(this.closest(".product").querySelector(".product__quantity-value").textContent);
	if (this.classList.contains("product__quantity-control_dec")) {		
		if (currentQty > 1) {			 
			 this.closest(".product").querySelector(".product__quantity-value").textContent = currentQty - 1; 
			 incDecTray(this.closest(".product").dataset.id, currentQty - 1) 			 
		}

	} else {
		     this.closest(".product").querySelector(".product__quantity-value").textContent = currentQty + 1;
		     incDecTray(this.closest(".product").dataset.id, currentQty + 1)
	}
}



const addToTray = document.querySelectorAll(".product__add");
for (let i = 0; i < addToTray.length; i++) {
	addToTray[i].addEventListener("click",addProduct)
}

const changeQty = document.querySelectorAll(".product__quantity-control");
for (let i = 0; i < changeQty.length; i++) {
	changeQty[i].addEventListener("click",incDecProcess)
}

