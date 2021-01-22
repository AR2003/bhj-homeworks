function addCurrency(currencyCode,currencyValue) {
    itemList = document.getElementById("items") 
	const insertText = `<div class="item">    
							<div class="item__code">
    				            ${currencyCode}
        				    </div>
            				<div class="item__value">
           				        ${currencyValue}
            				</div>
           				    <div class="item__currency">
        				        руб.
         				   </div>
         				</div>   `

	itemList.insertAdjacentHTML("beforeEnd",insertText);
}



let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function () {
		if(xhr.readyState === 4) {
			document.getElementById("loader").classList.remove("loader_active")
			currencyObj = JSON.parse(xhr.responseText).response.Valute;
			for (key in currencyObj) {
					addCurrency(key,currencyObj[key].Value);
			}
		}
		
}
