import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as documentService from '../services/documentService';
import { DocumentContext } from "../contexts/DocumentContext";

const Details = () => {
    const {docId} = useParams();
    const {deleteDoc} = useContext(DocumentContext);
    const [doc, setDoc] = useState({});

    useEffect(() => {
        documentService.getById(docId)
        .then(res => setDoc(res))
        .catch(error => console.error(error));
    },[docId]);

    const onDeleteClick = async (docId) => {
        await deleteDoc(docId);
    }

    return (
        <div>
            <h2>Document Details</h2>
            <br />
            <p>{doc.title}</p>
            <p>{doc.description}</p>
            <button ><Link to={`/edit/${doc._id}`}>Edit</Link></button>
            <button onClick={onDeleteClick}>Delete</button>
        </div>
    );
};

export default Details;