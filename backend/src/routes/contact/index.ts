import { Router } from 'express';

import {
	createContact,
	listContacts,
	deleteContact,
} from './controller';

export default function (): Router {
	const router = Router();

	router.get('/list', listContacts);
	router.post('/create', createContact);
	router.delete('/delete', deleteContact);

	return router;
}
