import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import FilterInterface from '../interfaces/filterInterface';

import '../styles/styles.css';


interface FormProps {
  onSubmit: (values: FilterInterface) => void;
}

const FilterForm: React.FC<FormProps> = ({ onSubmit }) => {

  return (
    <div>

        <Formik
            initialValues = {{
                zona: '',
                puesto: '',
                mesa: '',
            }}
            onSubmit={ (values) => {
                onSubmit(values)
            }}
            validationSchema = {Yup.object({
                    zona: Yup.string()
                                    .max(3, 'Debe de tener 3 caracteres o menos')
                                    .required('Requerido'),
                    puesto: Yup.string()
                                .max(3, 'Debe de tener 3 caracteres o menos')
                                .required('Requerido'),
                    mesa: Yup.string()
                                .max(2, 'El correo no tiene un formato válido')
                                .required('Requerido'),
                })
            }>
            {(formik) => (
                <Form>
                    <label htmlFor="zona">Zona</label>
                    <Field name="zona" type="text" />
                    <ErrorMessage name="zona" component="span" />
        
                    <label htmlFor="puesto">Puesto</label>
                    <Field name="puesto" type="text" />
                    <ErrorMessage name="puesto" component="span" />
        
                    <label htmlFor="mesa">Mesa</label>
                    <Field name="mesa" type="text" />
                    <ErrorMessage name="mesa" component="span" />
        
                    <button type="submit">Submit</button>
                </Form>
                )
            }
        </Formik>
    </div>    

  );
};

export default FilterForm;
