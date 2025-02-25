import { useContext, useEffect } from "react";
import { DocumentContext } from "../contexts/DocumentContext";
import useForm from '../hooks/useForm';
import { useParams } from "react-router-dom";

import * as documentService from '../services/documentService';

const Edit = () => {
    const {docId} = useParams();
    const {edit} = useContext(DocumentContext);
    const {values, onChangeHandler, onSubmit, changeValues} = useForm({
        title: '',
        description: ''
    }, edit);

    useEffect(() => {
        documentService.getById(docId)
        .then(res => changeValues(res))
        .catch(error => console.error(error));
    },[docId]);

    return (
        <>
        <h2>Edit Document</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={values.title} onChange={onChangeHandler}/>
            
            <br></br>

            <label htmlFor="description">Description</label>
            <input type="text" name="description" value={values.description} onChange={onChangeHandler}/>
            <br></br>

            <button type="submit">Edit</button>
        </form>
        </>
    );
};

export default Edit;