exports.success = function (response, overrideData = {}) {
	return {
		...overrideData,
		response: response ?? 'Success!',
		status: true
	};
};

exports.err = function(response, overrideData = {}) {
	return {
		...overrideData,
		response: response ?? 'Error!',
		status: false
	};
};