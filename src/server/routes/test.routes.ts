import { getTest, putTest, postTest, deleteTest} from "@controllers/test.controller";
import { Router} from "express";

const router = Router()

router.get('/test', getTest )
router.post('/test', postTest)
router.put('/test', putTest)
router.put('/test/active', )
router.delete('/test', deleteTest )

export default router