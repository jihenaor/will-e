import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const votopreferente = lazy(() => import('../votopreferente/pages/VotoPreferentePage'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/votopreferente',
        path: 'votopreferente',
        Component: votopreferente,
        name: 'Voto preferente'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    },
];
