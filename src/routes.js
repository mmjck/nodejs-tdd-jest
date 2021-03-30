const router = require('express').Router();


const SessionController = require('./app/controllers/SessionController')
const authMiddleware = require('./app/middleware/auth');



router.post("/sessions", SessionController.store);


router.use(authMiddleware);
router.get("/dashboard", (req, res) => {
    return res.status(200).send();
});




module.exports = router
 