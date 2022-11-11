import express from 'express';

import { getProducts, getProductById } from '../controller/product-controller.js';
import { userLogIn, userSignUp } from '../controller/user-controller.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

export default router;