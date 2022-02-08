import { DomainContact, RawContact } from './type';
import { capitalizeFirstLetter } from '../utils';

export const csvToContact = (contacts: RawContact[]): DomainContact[] => {
	if (contacts.length) {
		return contacts.map((contact: RawContact): DomainContact => ({
			firstName: capitalizeFirstLetter(contact.first_name),
			lastName: capitalizeFirstLetter(contact.last_name),
			phone: contact.phone,
			email: contact.email,
		}));
	}
};
