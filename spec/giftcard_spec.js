var takeOrder = require("../index");

describe("A program to subtract an order subttotal from a giftcard", () => {

	it("can print out the order", () => {
		expect(takeOrder('thin, ham'))
			.toBe("Order: thin pizza topped with ham");
		expect(takeOrder('pan, pineapple'))
			.toBe("Order: pan pizza topped with pineapple");
	});

});

