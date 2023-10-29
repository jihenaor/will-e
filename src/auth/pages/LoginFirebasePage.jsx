import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Grid, TextField } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startLoginWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
}

const formValidations = {
  email: [ (value) => value.length >= 4, 'El usuario es requedido'],
  password: [ (value) => value.length >= 6, 'La contraseña es requerido.'],
}

export const LoginFirebasePage = () => {
  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { email, password, onInputChange,
      isFormValid, usuarioValid, passwordValid 
    } = useForm(formData, formValidations);
  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();

    setFormSubmitted(true);

    if ( !isFormValid ) return;

    dispatch( startLoginWithEmailPassword({ email, password }) );
  }

  return (
    <AuthLayout title="Autenticación - Inventario">

      <form onSubmit={ onSubmit } 
          className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email"
                fullWidth
                name="email"
                value={ email}
                onChange={ onInputChange }
                error={ !!usuarioValid && formSubmitted }
                helperText={ usuarioValid }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmitted  }
                helperText={ passwordValid }
              />
            </Grid>
            

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

              <Grid 
                item xs={ 12 } sm={ 12 }
                display={!!errorMessage ? '' : 'none'}>
                <Alert severity='error'>{ errorMessage }</Alert>     
              </Grid>                
              <Grid item xs={ 12 } sm={ 6 }>
                  <Button
                    disabled={ isAuthenticating }
                    type="submit" 
                    variant='contained' 
                    fullWidth>
                    Ingresar
                  </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}

export default LoginFirebasePage;
