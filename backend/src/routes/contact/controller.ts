import { Request, Response, NextFunction } from 'express';
import { csvToContact } from '../../domain/parseCsvToContact';
import { getContatListByStatus, validateAndCreateContacts } from '../../useCases/contacts';

export async function createContact(req: Request, res: Response, next: NextFunction): Promise<void> {
	try {
		const contactList = csvToContact(req.body.initialList);
		const createdContactList = await validateAndCreateContacts(contactList);

		res.status(200).json(createdContactList);
	} catch (err) {
		next(err);
	}
}

export async function listContacts(req: Request, res: Response, next: NextFunction): Promise<void> {
	try {
		const { status } = req.query;
		const contactList = await getContatListByStatus(String(status));

		res.status(200).json(contactList);
	} catch (err) {
		next(err);
	}
}
