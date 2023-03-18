const mongoose = require('mongoose'),
    db = mongoose.connect(process.env.DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

module.exports = db;