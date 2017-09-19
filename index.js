function countdown(callback) {
	window.setTimeout(callback, 2000);
}

function createMultiplier(multiplier) {
	return function(newNum) {
		return newNum * multiplier;
	}
}

function doubler(num) {
	return createMultiplier(num)(2);
}

function tripler(num) {
	return createMultiplier(num)(3);
}

function multiplier(multiplierValue, value) {
	return multiplierValue * value;
}

var doublerWithBind = multiplier.bind(null, 2);

var triplerWithBind = multiplier.bind(null, 3);