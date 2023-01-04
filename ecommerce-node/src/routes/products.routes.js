const { Router } = require("express");
const { showAllProducts, addProducts } = require("../controllers");

const router = Router();

router.get("/products", showAllProducts);
router.post("/products", addProducts);

module.exports = router;
