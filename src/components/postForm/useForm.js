// const useForm = (callback, validate) => {
import { useState, useEffect } from 'react';
// import { edit } from 'external-editor';

const useForm = (callback, validate, edit) => {

    const [values, setValues] = useState({
        description: edit? edit.description: '',
        title: edit? edit.title: ''

    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
};

export default useForm;