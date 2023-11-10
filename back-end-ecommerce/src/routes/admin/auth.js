const express = require("express");
const { signup, signin, requireSignin } = require("../../controller/admin/auth");
const { validateRequest, isRequestValidated } = require("../../validators/auth");
const router = express.Router();


router.post('/admin/signup',validateRequest, isRequestValidated, signup);

router.post('/admin/signin', signin);

// router.post('/profile', requireSignin,(req, res) => {
//     res.status(200).json({
//         user:'profile'
//     })
// });


module.exports = router;