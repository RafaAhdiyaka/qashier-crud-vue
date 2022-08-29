//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/category/',
        name: 'category.index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/category/IndexCategory.vue')
    },
    {
        path: '/category/create',
        name: 'category.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/category/CreateCategory.vue')
    },
    {
        path: '/category/edit/:id',
        name: 'category.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/category/EditCategory.vue')
    },

    {
        path: '/profile/',
        name: 'profile.index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/profile/IndexProfile.vue')
    },
    {
        path: '/profile/create',
        name: 'profile.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/profile/CreateProfile.vue')
    },
    {
        path: '/profile/edit/:id',
        name: 'profile.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/profile/EditProfile.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router