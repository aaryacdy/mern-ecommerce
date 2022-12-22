const Product = require("../models/productModel");

//Add a prooduct

exports.addProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).json({
      success: true,
      product: product,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.find();
  return res.status(200).json({
    message: "Success",
    products,
  });
};

exports.updateProduct = async (req, res, next) => {
  const productId = req.params.id;
  const product = Product.findById(productId);
  if (!product) {
    res.status(404).json({
      success: false,
    });
  }

  let updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
};

exports.deleteProduct = async (req, res, next) => {
  const productId = req.params.id;
  const product = Product.findById(productId);
  if (!product) {
    res.status(404).json({
      success: false,
    });
  }

  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product is removed successfully.",
  });
};
