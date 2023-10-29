import { Route, Routes } from 'react-router-dom';
import { LoginFirebasePage } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/auth" element={ <LoginFirebasePage /> } /> 

    </Routes>
  )
}
