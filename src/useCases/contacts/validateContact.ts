import { getRepository } from 'typeorm';

import Contact from '../../entity/Contact';

export async function createContacts(contactList: Contact[]): Promise<Contact[]> {
	const contactRepository = getRepository(Contact);

	try {
		const contact = contactRepository.create({
			email: 'juniorlechado',
			firstName: 'sidnei',
			lastName: 'lechado',
			phone: '1235',
		});

		await contactRepository.save(contact);

		return [contact];
	} catch (err) {
		console.log(err);
	}
}
