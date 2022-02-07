import { getRepository } from 'typeorm';
import md5 from 'md5';
import Contact from '../../entity/Contact';
import { DomainContact } from '../../domain/type';
import { validator } from '../../utils/validationSchema';

export async function validateAndCreateContacts(contactList: DomainContact[]): Promise<Contact[]> {
	const contactRepository = getRepository(Contact);

	try {
		if (contactList.length) {
			contactList = contactList.map((contact) => {
				const isValid = validator(contact);

				if (!isValid) {
					contact = { ...contact, status: 'invalid', id: 'abc' };
				}

				return { ...contact, id: md5(`${contact.firstName}${contact.lastName}`) };
			});
		}

		const createdContacts = contactRepository.create(contactList);
		await contactRepository.save(createdContacts);

		return createdContacts;
	} catch (err) {
		console.log(err);
	}
}
