import { getRepository } from 'typeorm';
import Contact from '../../entity/Contact';

export async function deleteContactById(id: string): Promise<Contact> {
	const contactRepository = getRepository(Contact);

	try {
		return contactRepository.save({
			id,
			status: 'deleted',
		});
	} catch (err) {
		console.log(err);
	}
}
