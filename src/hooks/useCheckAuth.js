import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';

import { login, logout } from '../store/auth';

export const useCheckAuth = () => {
  
  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
      
      onAuthStateChanged( FirebaseAuth, async( user ) => {
        if ( !user ) return dispatch( logout() );

 
        const { uid, email, displayName, photoURL } = user;
        dispatch( login({ uid, email, displayName, photoURL }) );
      })
  }, []);

  return status;
}

export const useCheckAuthPython = () => {
  
  const { status } = useSelector( state => state.auth );
  
//  const dispatch = useDispatch();
 // const [token, setToken] = useLocalStorage('token', '');

  useEffect(() => {
  const loadToken = async () => {
//        const token = undefined;
 /*     if ( !token ) return dispatch( logout() );
*/
//        dispatch( login({ access_token: token }) );
    };

    loadToken();
  }, []);

  return status;
}
