export class BaseRaw {
	constructor(col) {
		this.col = col;
	}

	findOneById(_id, options) {
		return this.findOne({ _id }, options);
	}

	findOne(...args) {
		return this.col.findOne(...args);
	}

	findUsersInRoles() {
		throw new Error('overwrite-function', 'You must overwrite this function in the extended classes');
	}
}
