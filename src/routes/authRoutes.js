const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// 注册路由
router.post('/register', authController.register);

// 登录路由
router.post('/login', authController.login);

// 刷新路由
router.post('/refresh', authController.refresh);

// 重置密码路由
router.post('/reset', authController.resetPassword);

// 更新密码路由
router.put('/update/password', authController.updatePassword);

module.exports = router;
