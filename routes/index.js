import express from 'express'
import registerControllers from '../controllers/registerControllers.js'

const router = express.Router();

router.post('/register',registerControllers.register)


export default router;