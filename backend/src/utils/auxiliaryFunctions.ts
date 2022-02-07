import md5 from 'md5';

export const capitalizeFirstLetter = (word: string): string =>
	word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

export const hashId = (firstName: string, lastName: string): string =>
	md5(`${firstName}${lastName}`);

export const reduceErrors = (errors): string =>
	errors.map((error) => `${error.instancePath} - ${error.message};`.split('/')[1]).join(' ');
