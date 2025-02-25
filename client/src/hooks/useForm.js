const { useState } = require("react");

const useForm = (initialValues, submitHandler) => {
    const [values, setValues]= useState(initialValues);

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await submitHandler(values);
    }

    const changeValues = (newValues) => {
        setValues(newValues);
    }

    return {
        values,
        onChangeHandler,
        onSubmit,
        changeValues,
    }
}

export default useForm;