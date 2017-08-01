var basket =(function(){

  var listGoods = [];
  var total =0;
  var addOrder = document.querySelector('.container-basket');
  addOrder.innerHTML = '';

  return { 
    addGoods: function(product) {
      listGoods.push(product);
    },
    countSum: function() {
      for(var i=0;i<listGoods.length;i++) {
        total += listGoods[i].price;
      }
      return total;
    },
    fillListGoods: function() {
      var containerBasket = document.querySelector('.container-basket');

		var arrTd = listGoods.map (function(elem) {
		var newTr = document.createElement('tr');

		var name = document.createElement('td');
		name.innerHTML = elem.name;
		newTr.appendChild(name);

		var articul = document.createElement('td');
		articul.innerHTML = elem.articul;
		newTr.appendChild(articul);

		var quantity = document.createElement('td');
		quantity.innerHTML = elem.quantity;
		newTr.appendChild(quantity);

		var price = document.createElement('td');
		price.innerHTML = elem.price;
		newTr.appendChild(price);

		return newTr;
		})
		return arrTd.forEach(function(item) {
		containerBasket.appendChild(item);
		})
	}

  }
}());



