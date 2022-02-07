import { DomainContact } from './type';

export const csvToContact = (contacts: string[][]): DomainContact[] => {
	if (contacts.length) {
		return contacts.map((contact): DomainContact => ({
			firstName: contact[0],
			lastName: contact[1],
			phone: contact[2],
			email: contact[3],
		}));
	}
};
