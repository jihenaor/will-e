import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const votopreferente = lazy(() => import('../votopreferente/pages/VotoPreferentePage'));
const login = lazy(() => import('../auth/pages/LoginFirebasePage'));
const loginOut = lazy(() => import('../auth/pages/LoginOutPage'));

export const routes: Route[] = [
    {
        to: '/votopreferente',
        path: 'votopreferente',
        Component: votopreferente,
        name: 'Voto preferente'
    },

    {
        to: '/auth',
        path: 'auth',
        Component: login,
        name: 'Login'
    },

    {
        to: '/loginout',
        path: 'loginout',
        Component: loginOut,
        name: 'Login Out'
    },

];
