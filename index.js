exports.success = function (response, overrideData = {}) {
	return {
		status: true,
		response: response !== null ? response : 'Success!',
		...overrideData
	};
};

exports.err = function(response, overrideData = {}) {
	return {
		status: false,
		response: response !== null ? response : 'Error!',
		...overrideData
	};
};