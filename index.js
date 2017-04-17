//var orderCount = 0;

function takeOrder(topping, crustType) {
	return 'Order: ' + crustType + ' pizza topped with ' + topping;
	//orderCount = orderCount + 1;
}

//function getSubTotal(itemcount) {
	//return itemCount * 7.5;
//}

//function getTax() {
	//return getSubTotal(orderCount) * 0.05;
//}

//function getTotal() {
	//return getSubTotal(orderCount) + getTax();

//}

//takeOrder('ham', 'thin');
//takeOrder('pan', 'pineapple');

//console.log(getTotal(orderCount));


module.exports = takeOrder;