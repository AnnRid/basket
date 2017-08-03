var nameInput = document.querySelector('.name');
var articulInput = document.querySelector('.articul');
var quantityInput = document.querySelector('.quantity');
var priceInput = document.querySelector('.price');
var btnBasket = document.querySelector('.btn-basket');

btnBasket.addEventListener('click', function(){
var newGood = {
	name: nameInput.value,
	articul: articulInput.value,
	quantity: quantityInput.value,
	price: priceInput.value
};
basket.addGoods(newGood);
basket.fillListGoods();
});
