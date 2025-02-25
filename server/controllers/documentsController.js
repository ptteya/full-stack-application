const documentService = require('../services/documentService.js');

exports.create = async (req, res) => {
    const data = req.body;

    try {
        const document = await documentService.create(data);
        res.status(200).json(document);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server error' });
    }
}

exports.getAll = async (req, res) => {
    try {
        const documents = await documentService.getAll();
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server error' });
    }
}

exports.update = async (req, res) => {
    const { documentId } = req.params;
    const data = req.body;

    try {
        const updatedDocument = await documentService.update(documentId, data);
        res.status(200).json(updatedDocument);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server error' });
    }
}

exports.getById = async (req, res) => {
    const { documentId } = req.params;

    try {
        const document = await documentService.getById(documentId);
        res.status(200).json(document);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server error' });
    }
}

exports.deleteById = async (req, res) => {
    const { documentId } = req.params;

    try {
        await documentService.deleteById(documentId);
        res.status(200).json({});
    } catch (error) {
        res.status(500).json({ error: 'Internal Server error' });
    }
}
