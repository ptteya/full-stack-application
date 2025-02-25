import * as requester from '../services/requester';

export const getAll = () => requester.get('/documents');

export const create = (data) => requester.post('/documents', data);

export const getById = (docId) => requester.get(`/documents/${docId}`);

export const edit = (docId, data) => requester.put(`/documents/${docId}`, data);

export const deleteDoc = (docId) => requester.del(`/documents/${docId}`);

