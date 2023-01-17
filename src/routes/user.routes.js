const {Router} = require('express');
const {getAllUsers, getUserById, getUserCourse, createNewUser, editUser} = require('../controllers/user.controllers');
const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.get('/users/course/:id', getUserCourse);
router.post('/users', createNewUser);
router.put('/users/:id', editUser);

module.exports = router;