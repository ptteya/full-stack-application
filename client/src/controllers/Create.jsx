import { useContext } from "react";
import { DocumentContext } from "../contexts/DocumentContext";
import useForm from '../hooks/useForm';

const Create = () => {
    const {create} = useContext(DocumentContext);
    const {values, onChangeHandler, onSubmit} = useForm({
        title: '',
        description: ''
    }, create);

    return (
        <>
        <h2>Create Document</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={values.title} onChange={onChangeHandler}/>
            
            <br></br>

            <label htmlFor="description">Description</label>
            <input type="text" name="description" value={values.description} onChange={onChangeHandler}/>
            <br></br>

            <button type="submit">Create</button>
        </form>
        </>
    );
};

export default Create;