const { Router } = require("express");

const { getAllUsers, registerUser } = require("../controllers");
const router = Router();

router.get("/users", getAllUsers);
router.post("/users", registerUser);
module.exports = router;
