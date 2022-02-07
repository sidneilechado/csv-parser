import { Request, Response, NextFunction } from 'express';
import { csvToContact } from '../../domain/parseCsvToContact';
import { validateAndCreateContacts } from '../../useCases/contacts/validateAndCreateContact';

export async function contactController(req: Request, res: Response, next: NextFunction): Promise<void> {
	try {
		const contactList = csvToContact(req.body.initialList);
		const createdContactList = await validateAndCreateContacts(contactList);

		res.status(200).json(createdContactList);
	} catch (err) {
		next(err);
	}
}
