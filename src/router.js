import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import Portfolio from '@/pages/Portfolio'
import Services from '@/pages/Services'


Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes : [
        {path : '/', component: Home },
        { path: '/contact', component: Contact },
        { path: '/portfolio', component: Portfolio },
        { path: '/services', component: Services },
    ]
})