import { Router } from 'express';
import contact from './contact';

export default function (): Router {
	const router = Router();

	router.use('/contact', contact());

	return router;
}
