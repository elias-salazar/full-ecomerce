const { Router } = require("express");
const { getAllOrder } = require("../controllers");

const router = Router();

router.get("/users/:id/orders", getAllOrder);

module.exports = router;
