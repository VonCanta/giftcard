var giftcard = require("../index");



describe("A program to subtract an order subttotal from a giftcard", () => {

	it("can print out the order", () => {
		expect(giftcard.takeOrder("ham","thin"))
			.toBe("Order: thin pizza topped with ham");
		expect(giftcard.takeOrder("pineapple","pan"))
			.toBe("Order: pan pizza topped with pineapple");

	});

	it('can create a subtotal for the order at $7.50 per pizza', () => {
		expect(giftcard.getSubTotal(1))
			.toBe(7.50);
		expect(giftcard.getSubTotal(2))
			.toBe(15);
	});







});




