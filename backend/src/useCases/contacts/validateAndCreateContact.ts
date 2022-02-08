import { getRepository } from 'typeorm';
import Contact from '../../entity/Contact';
import { DomainContact } from '../../domain/type';
import {
	validator, hashId, reduceErrors, removeDuplicateContacts,
} from '../../utils';

export async function validateAndCreateContacts(contactList: DomainContact[]): Promise<Contact[]> {
	const contactRepository = getRepository(Contact);

	try {
		if (contactList.length) {
			const filteredContactList = removeDuplicateContacts(contactList);
			contactList = filteredContactList.map((contact) => {
				const isValid = validator(contact);
				const hashedId = hashId(contact.firstName, contact.lastName);

				if (!isValid) {
					return Object.assign(contact, {
						status: 'invalid',
						id: hashedId,
						log: reduceErrors(validator.errors),
					});
				}

				return Object.assign(contact, {
					id: hashedId,
					status: 'valid',
					log: null,
				});
			});
		}

		const createdContacts = contactRepository.create(contactList);
		await contactRepository.save(createdContacts);

		return createdContacts;
	} catch (err) {
		console.log(err);
	}
}
