import React, { useEffect, useRef } from 'react';
import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';

import FilterInterface from '../interfaces/filterInterface';

import '../styles/styles.css';


interface FormProps {
  onSubmit: (values: FilterInterface) => void;
  initialZona: string;
}

const FilterForm: React.FC<FormProps> = ({ onSubmit, initialZona  }) => {

  return (
    <div>

        <Formik
            enableReinitialize={true}        
            initialValues = {{
                zona: initialZona,
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
                                .max(3, 'La mesa no tiene el formato valido')
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
        
                    <button type="submit">Buscar</button>
                </Form>
                )
            }
        </Formik>
    </div>    

  );
};

export default FilterForm;
