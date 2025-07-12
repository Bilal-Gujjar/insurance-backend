import { Router } from 'express';
import { getRecommendation } from '../controllers/recommendationController';


const router = Router();
router.post('/', getRecommendation);
export default router;
