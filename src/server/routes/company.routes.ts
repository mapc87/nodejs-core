import { Router} from "express";
import { 
    
} from "@services/business.service";
import { getBusiness } from "@server/controllers/business.controller";


const router = Router()

router.get('/business', getBusiness)
router.post('/business', )
router.put('/business', )
router.delete('/business', )


export default router
