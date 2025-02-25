import { useNavigate } from 'react-router-dom';
import * as  documentService from '../services/documentService';
const { createContext, useState } = require("react");

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();

    useState(() => {
        documentService.getAll()
            .then(res => setDocuments(res))
            .catch(error => console.error(error));
    }, []);

    const create = async (values) => {
        const newDoc = await documentService.create(values);
        setDocuments(state => [...state, newDoc]);
        navigate('/');
    };

    const edit = async (values) => {
        const newDoc = await documentService.edit(values);
        navigate('/');
    };

    const deleteDoc = async (docId) => {
        await documentService.deleteDoc(docId);
        setDocuments(prevDocs => prevDocs.filter(doc => doc._id !== docId));
        navigate('/');
    }

    const context = {
        documents,
        create,
        edit,
        deleteDoc,
    };

    return (
        <DocumentContext.Provider value={context}>
            {children}
        </DocumentContext.Provider>
    );
}