import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';


import '../styles/styles.css'

export const VotoPreferentePage = () => {

    const {
        formData, 
        onChange,
        resetForm,
        zona,
        puesto,
        mesa
    } = useForm({
        zona: '', 
        puesto: '', 
        mesa: ''
    });
      

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <h1>Voto preferente</h1>

            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    name="zona"
                    placeholder="Zona"
                    value={ zona }
                    onChange={ onChange }
                    className={`${zona.trim().length <= 0 && 'has-error' }`}
                />
                { zona.trim().length <= 0 && <span>La zona es requerida</span> }

                <input
                    type="text"
                    name="puesto"
                    placeholder="Puesto"
                    value={ puesto }
                    onChange={ onChange }
                    className={`${puesto.trim().length <= 0 && 'has-error' }`}
                />
                { puesto.trim().length <= 0 && <span>El puesto es requerido</span> }

                <input
                    type="text"
                    name="mesa"
                    placeholder="Mesa"
                    value={ mesa }
                    onChange={ onChange }
                />
                { mesa.trim().length <= 0 && <span>La mesa es requerida</span> }

                <button type="submit">Buscar</button>
                <button type="button" onClick={ resetForm }>Reset</button>
            </form>
        </div>
    )
}


export default VotoPreferentePage;