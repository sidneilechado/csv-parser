import md5 from 'md5';
import { DomainContact } from 'src/domain/type';

export const capitalizeFirstLetter = (word: string): string => {
	if (word.length) {
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	}

	return word;
};

export const removeDuplicateContacts = (contacts: DomainContact[]): DomainContact[] =>
	contacts.filter((value, index, self) =>
		index === self.findIndex((t) => (
			t.firstName === value.firstName && t.lastName === value.lastName
		)));

export const hashId = (firstName: string, lastName: string): string =>
	md5(`${firstName}${lastName}`);

export const reduceErrors = (errors): string =>
	errors.map((error) => `${error.instancePath} - ${error.message};`.split('/')[1]).join(' ');
