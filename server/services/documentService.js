const Document = require('../models/Document');

exports.create = (data) => Document.create(data);

exports.getAll = () => Document.find();

exports.update = (documentId, data) => Document.findByIdAndUpdate(documentId, data, {new: true, runValidatiors:true});

exports.getById = (documentId) => Document.findById(documentId);

exports.deleteById = (documentId) => Document.findByIdAndDelete(documentId);