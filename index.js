var orderCount = 0;


function takeOrder(topping, crustType) {
	return 'Order: ' + crustType + ' pizza topped with ' + topping;
	orderCount = orderCount + 1;
}

function getSubTotal(orderCount) {
	return orderCount * 7.5;
}

function getTax(orderCount) {
	return getSubTotal(orderCount) * 0.05;
}

function getTotal(orderCount) {
	return getSubTotal(orderCount) + getTax(orderCount);

}

//takeOrder('pan', 'pineapple');
//takeOrder('ham', 'thin');

//console.log(getTotal(orderCount));


module.exports = {
	takeOrder: takeOrder,

	getSubTotal: getSubTotal,

	getTax: getTax,

	getTotal: getTotal,
}