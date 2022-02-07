import { Router } from 'express';

import {
	createContact,
	listContacts,
} from './controller';

export default function (): Router {
	const router = Router();

	router.get('/list', listContacts);
	router.post('/create', createContact);

	return router;
}
