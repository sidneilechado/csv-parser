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
			minLength: 1,
		},
		lastName: {
			type: 'string',
			minLength: 1,
		},
		email: {
			type: 'string',
			minLength: 1,
			format: 'email',
		},
		phone: {
			type: 'string',
			minLength: 1,
			// pattern: '^((([0-9]{3}))|[0-9]{3})[s-]?[0-9]{3}[s-]?[0-9]{4}$',
		},
	},
};

export const validator = ajv.compile(validationSchema);
