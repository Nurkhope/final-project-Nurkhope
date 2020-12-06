let buttonLoad = document.getElementById("load");
buttonLoad.addEventListener("click",onLoadClick);

const buttonSortMaker = document.getElementById("sortByMaker");
buttonSortMaker.addEventListener("click", onSortMakerClick);

const buttonSortPrice = document.getElementById("sortByPrice");
buttonSortPrice.addEventListener("click", onSortPriceClick);


function onLoadClick(event){
	document.getElementById("adverts").innerHTML = "";
	const url = 'http://demo5357846.mockable.io/cars-adverts';
	fetch(url)
	 .then(response => response.json())
	 .then(json => {
		json.forEach(element => {
			document.getElementById("adverts").innerHTML += "<div class='card-advert'><div class='c-mark'>" + element.mark + "</div><div class='c-model'>" + element.model + "</div><div class='c-price'>" + element.price + "</div></div>";
		});
	 buttonLoad.innerHTML = "Объявления загружены";
})};

function onSortMakerClick(event) {
	document.getElementById("adverts").innerHTML = "";
	const url = 'http://demo5357846.mockable.io/cars-adverts';
	fetch(url)
	 .then(response => response.json())
	 .then(json => {
		json.sort(function(a,b) {
			if (a.mark < b.mark) {
				return -1;
			}
			if (a.mark > b.mark) {
					return 1;
			}
			return 0;
		})
		json.forEach(element => {
			document.getElementById("adverts").innerHTML += "<div class='card-advert'><div class='c-mark'>" + element.mark + "</div><div class='c-model'>" + element.model +"</div><div class='c-price'>" + element.price + "</div></div>";
		});
})};

function onSortPriceClick(event) {
	document.getElementById("adverts").innerHTML = "";
	const url = 'http://demo5357846.mockable.io/cars-adverts';
	fetch(url)
	 .then(response => response.json())
	 .then(json => {
		json.sort(function(a,b) {
			if (a.price < b.price) {
				return -1;
			}
			if (a.price > b.price) {
					return 1;
			}
			return 0;
		})
		json.forEach(element => {
			document.getElementById("adverts").innerHTML += "<div class='card-advert'><div class='c-mark'>" + element.mark + "</div><div class='c-model'>" + element.model +"</div><div class='c-price'>" + element.price + "</div></div>";
		});
})};
