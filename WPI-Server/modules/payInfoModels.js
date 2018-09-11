const mongoose = require('mongoose');
const paymentSchema = mongoose.Schema({
    ppz_order_id: String,
    order_id: String,
    order_info: String,
    signature: String,
    price: Number,
    real_price: Number,
    email: String
});
const paymentModel = mongoose.model('paymentmodels', paymentSchema);
module.exports = paymentModel;