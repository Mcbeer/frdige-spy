export class InvalidInputError extends Error {
	status: number;
	constructor(message: string) {
		super(message);
		this.status = 422;
		this.name = 'InvalidInputError';
	}
}
