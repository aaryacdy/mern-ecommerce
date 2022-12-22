const express = require("express");
const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const router = express.Router();

router.route("/").post(addProduct);
router.route("/").get(getProducts);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct);

module.exports = router;
