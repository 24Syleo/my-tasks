import React, { useState } from 'react';
import { useFormik } from 'formik';
import { IFormAddTask, ITask } from './FormAddTask.interface';
import { Input, TextArea, Button } from "../../components";
import "./FormAddTask.style.css";

const FormAddTask = () => {
    const [step, setStep] = useState(1);
    const [notValid, setNotValid] = useState(false);

    const validate = (values: ITask) => {
        const errors: any = {};
        if (!values.title) {
            setNotValid(true);
            errors.title = "Un titre STP!";
        }

        if (values.title.length > 20) {
            setNotValid(true);
            errors.title = "Titre trop long";
        }

        if (!values.description) {
            setNotValid(true);
            errors.description = "Une description STP!";
        }

        if (values.description.length > 450) {
            setNotValid(true);
            errors.description = "Description trop longue";
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
        },
        validate,
        onSubmit: (values: ITask) => {
            setNotValid(false);
            console.log(values);
        },
    });

    return (
        <>
            <h2>Ajouter une tâche</h2>
            <form className="containerForm" noValidate onSubmit={formik.handleSubmit}>
                {step === 1 && (
                    <Input
                        type="text"
                        value={formik.values.title} // Correct
                        change={formik.handleChange}
                        placeholder="Titre de la tâche"
                        name="title"
                    />
                )}
                {notValid && formik.errors.title && <span className='error'>{formik.errors.title}</span>}

                {step === 2 && (
                    <TextArea
                        value={formik.values.description}
                        change={formik.handleChange}
                        placeholder="Description de la tâche"
                        name="description"
                    />
                )}
                {notValid && formik.errors.description && <span className='error'>{formik.errors.description}</span>}

                <div className="form-actions">
                    {step === 1 && (
                        <Button
                            type="button"
                            click={() => {
                                if (!formik.errors.title) setStep(2);
                            }}
                            title='Suivant'
                            size='medium'
                            color='primary'
                            shadow={false}
                        />
                    )}
                    {step === 2 && (
                        <div className='btnFinal'>
                            <Button
                                type="button"
                                click={() => setStep(1)}
                                title='Retour'
                                size='medium'
                                color='primary'
                                shadow={false}
                            />
                            <Button
                                type='submit'
                                title='Créer'
                                size='medium'
                                color='success'
                                shadow={false}
                            />
                        </div>
                    )}
                </div>
            </form>
        </>
    );
};

export default FormAddTask;
