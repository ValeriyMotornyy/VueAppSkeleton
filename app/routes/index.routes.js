import Home         from '../views/App.vue';
import Unauthorised from '../views/error/401.vue';

export default [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: '401',
        path: '/401',
        component: Unauthorised
    },
    {
        path: '*',
        redirect: { name: 'home' },
    },
];
