const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;

