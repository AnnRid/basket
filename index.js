var containerBasket = document.querySelector('.container-basket');
var nameInput = document.querySelector('.name');
var articulInput = document.querySelector('.articul');
var quantityInput = document.querySelector('.quantity');
var priceInput = document.querySelector('.price');
var btnBasket = document.querySelector('.btn-basket'); 
var btnDelGoods = document.querySelector('.btn-delGoods');

btnBasket.addEventListener('click', function(){
	var newGood = {
		name: nameInput.value,
 		articul: articulInput.value,
 		quantity: quantityInput.value,
 		price: priceInput.value
	};
	basket.addGoods(newGood);
	containerBasket.innerHTML = '';
	var basketFillListGoods =basket.fillListGoods();
	basketFillListGoods.forEach(function(item){
		containerBasket.appendChild(item);
	})
	nameInput.value = '';
	articulInput.value = '';
	quantityInput.value = '';
	priceInput.value = '';
});
btnDelGoods.addEventListener('click', function() {
	basket.removeGoods();
})


