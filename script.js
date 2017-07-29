var basket =(function(){

  var list = [];
  var total =0;
  var addOrder = document.querySelector('.container-basket');
  addOrder.innerHTML = '';
  
  return { 
    addGoods: function(product) {
      list.push(product);
    },
    countSum: function() {
      for(var i=0;i<list.length;i++) {
      total += list[i].price;
      }
      return total;
    },
    addList: function() {
      return list.fgitorEach(function(elem) {
      addOrder.innerHTML +=
      '<td>' + elem.name + '</td>' +
      '<td>' + elem.code + '</td>'  
      })
    }

  }
}());


