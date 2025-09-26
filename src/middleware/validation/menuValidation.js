const Joi = require("joi");
const AppError = require("../../utils/appError");

const createMenuSchema = Joi.object({
  name: Joi.string().min(3).max(255).required().messages({
    "string.base": `Nama menu harus berupa teks.`,
    "string.empty": `Nama menu tidak boleh kosong.`,
    "string.min": `Nama menu harus memiliki setidaknya {#limit} karakter.`,
    "string.max": `Nama menu tidak boleh lebih dari {#limit} karakter.`,
    "any.required": `Nama menu wajib diisi.`,
  }),
  description: Joi.string().max(1000).optional().messages({
    "string.base": `Deskripsi harus berupa teks.`,
    "string.max": `Deskripsi tidak boleh lebih dari {#limit} karakter.`,
  }),
  price: Joi.number().min(0).required().messages({
    "number.base": `Harga harus berupa angka.`,
    "number.min": `Harga tidak boleh kurang dari nol.`,
    "any.required": `Harga wajib diisi.`,
  }),
  stock: Joi.number().integer().min(0).required().messages({
    "number.base": `Stok harus berupa angka.`,
    "number.integer": `Stok harus berupa bilangan bulat.`,
    "number.min": `Stok tidak boleh kurang dari nol.`,
    "any.required": `Stok wajib diisi.`,
  }),
  category: Joi.string().valid("Food", "Drink", "Dessert").required().messages({
    "string.empty": `Kategori tidak boleh kosong.`,
    "any.required": `Kategori wajib diisi.`,
    "any.only": `Kategori tidak valid. Pilih dari "Food", "Drink", atau "Dessert".`,
  }),
});

const updateMenuSchema = Joi.object({
  name: Joi.string().min(3).max(255).optional().messages({
    "string.base": `Nama menu harus berupa teks.`,
    "string.min": `Nama menu harus memiliki setidaknya {#limit} karakter.`,
    "string.max": `Nama menu tidak boleh lebih dari {#limit} karakter.`,
  }),
  description: Joi.string().max(1000).optional().messages({
    "string.base": `Deskripsi harus berupa teks.`,
    "string.max": `Deskripsi tidak boleh lebih dari {#limit} karakter.`,
  }),
  price: Joi.number().min(0).optional().messages({
    "number.base": `Harga harus berupa angka.`,
    "number.min": `Harga tidak boleh kurang dari nol.`,
  }),
  stock: Joi.number().integer().min(0).optional().messages({
    "number.base": `Stok harus berupa angka.`,
    "number.integer": `Stok harus berupa bilangan bulat.`,
    "number.min": `Stok tidak boleh kurang dari nol.`,
  }),
  category: Joi.string().valid("Food", "Drink", "Dessert").optional().messages({
    "any.only": `Kategori tidak valid. Pilih dari "Food", "Drink", atau "Dessert".`,
  }),
});

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    next(new AppError(errorMessage, 400));
  }
  next();
};

module.exports = {
  createMenuValidation: validate(createMenuSchema),
  updateMenuValidation: validate(updateMenuSchema),
};
