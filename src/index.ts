export class StatusResponse {
	status: boolean = false;
	text: string = '';

	constructor (response: string){
		if (typeof response === 'string'){
			this.text = response;
		}
	}

	get response (){
		return this.text;
	}
}

class Success extends StatusResponse {
	status: true = true;
	data: object = {};

	constructor (response: string, data: object){
		super(response);

		if (typeof data === 'object'){
			this.data = data;
		}
	}
}

export function success (response: string, overrideData: object = {}) {
	return {
		...overrideData,
		response: response ?? 'Success!',
		status: true
	};
};

export function err(response: string, overrideData: object = {}) {
	return {
		...overrideData,
		response: response ?? 'Error!',
		status: false
	};
};