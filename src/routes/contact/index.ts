import { Router } from 'express';

import {
	contactController,
} from './controller';

export default function (): Router {
	const router = Router();

	router.post('/create', contactController);

	return router;
}
