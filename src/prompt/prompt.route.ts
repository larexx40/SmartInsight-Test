import { Router } from 'express';
import { generateResponse } from './prompt.controller';

const router = Router();

router.post('/', generateResponse);

export { router as promptRouter };