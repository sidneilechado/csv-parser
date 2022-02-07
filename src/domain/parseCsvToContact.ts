import { DomainContact } from './type';
import { capitalizeFirstLetter } from '../utils';

export const csvToContact = (contacts: string[][]): DomainContact[] => {
	if (contacts.length) {
		return contacts.map((contact): DomainContact => ({
			firstName: capitalizeFirstLetter(contact[0]),
			lastName: capitalizeFirstLetter(contact[1]),
			phone: contact[2],
			email: contact[3],
		}));
	}
};
