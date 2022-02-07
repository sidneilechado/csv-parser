import { getRepository } from 'typeorm';
import Contact from '../../entity/Contact';

export async function getContatListByStatus(status: string): Promise<Contact[]> {
	const contactRepository = getRepository(Contact);

	try {
		return contactRepository.find({
			where: {
				status,
			},
		});
	} catch (err) {
		console.log(err);
	}
}
