import { Router } from 'express';

// TODO: Create controller
import {
	contactController,
} from './controller';

export default function (): Router {
	const router = Router();

	router.get('/create', contactController);

	return router;
}
