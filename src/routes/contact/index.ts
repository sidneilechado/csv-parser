import { Router } from 'express';

// TODO: Create controller
import {
	createContacts,
} from '../../useCases/contacts/createContact';

export default function (): Router {
	const router = Router();

	router.get('/create', createContacts);

	return router;
}
