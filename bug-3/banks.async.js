var banks = [
	{
		id: 1234,
		name: "Bank of America",
		confirmed: true
	},
	{
		id: 5678,
		name: "Wells Fargo",
		confirmed: false
	},
	{
		id: 91011,
		name: "Citi",
		confirmed: true
	}
];
exports.collection = function () {
	return setTimeout(function () {
		return banks;
	}, 500);
}