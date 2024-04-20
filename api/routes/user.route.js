import express from 'express'
import {ctrlGetAllUser} from '../controllers/user.controller.js'
const router=express.Router();
router.get('/',ctrlGetAllUser)
export default router;