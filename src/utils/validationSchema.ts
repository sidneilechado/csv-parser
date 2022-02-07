import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

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
			format: 'email',
		},
		phone: {
			type: 'string',
		},
	},
};

export const validator = ajv.compile(validationSchema);
