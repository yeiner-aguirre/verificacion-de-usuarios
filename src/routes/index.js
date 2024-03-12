const express = require('express');
const userRouter = require('./user.route');
const router = express.Router();

// colocar las rutas aquí
router.use(userRouter)

module.exports = router;