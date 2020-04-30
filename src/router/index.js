import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '../pages/Homepage';
import Tagspage from '../pages/Tagspage';
import Epicpage from '../pages/Epicpage';
import Projectpage from '../pages/Projectpage';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            components: {
                default: Homepage,
            },
        },
        {
            path: '/tags',
            name: 'Tagspage',
            component: Tagspage,
        },
        {
            path: '/project/:id/:name',
            name: 'Projectpage',
            component: Projectpage,
            props: true,
        },
        {
            path: '/epic/:id/:name',
            name: 'Epicpage',
            component: Epicpage,
            props: true,
        },
    ],
});
