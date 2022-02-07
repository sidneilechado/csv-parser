import { Request, Response, NextFunction } from 'express';
import Contact from 'src/entity/Contact';

import { csvToContact } from '../../domain/parseCsvToContact';
import { validateAndCreateContacts } from '../../useCases/contacts/validateAndCreateContact';

const initialList = [
	['oi', 'eu', 'sou', 'sid'],
	['oi', 'eu', 'sou', 'sid'],
	['oi', 'eu', 'sou', 'sid'],
	['oi', 'eu', 'sou', 'sid'],
	['oi', 'eu', 'sou', 'sid'],
];

export async function contactController(req: Request, res: Response, next: NextFunction): Promise<void> {
	try {
		const contactList = csvToContact(initialList);
		const createdContactList = await validateAndCreateContacts(contactList);

		res.status(200).json(createdContactList);
	} catch (err) {
		next(err);
	}
}
