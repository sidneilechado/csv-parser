import Ajv from 'ajv';

const ajv = new Ajv();

const validationSchema = {
	type: 'object',
	required: [
		'firstName',
		'lastName',
		'email',
		'phone',
	],
	additionalProperties: false,
	properties: {
		firstName: {
			type: 'string',
		},
		lastName: {
			type: 'string',
		},
		email: {
			type: 'string',
		},
		phone: {
			type: 'string',
		},
	},
};

export const validator = ajv.compile(validationSchema);
