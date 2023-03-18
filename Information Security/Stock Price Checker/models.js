const mongoose = require('mongoose'),
    { Schema } = mongoose,
    StockSchema = new Schema({ symbol: { type: String, required: true }, likes: { type: [String], default: [] } }),
    Stock = mongoose.model("Stock", StockSchema);

exports.Stock = Stock;