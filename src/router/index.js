//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    // Category
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

    // Menu
    {
        path: '/menu/',
        name: 'menu.index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/menu/IndexMenu.vue')
    },
    {
        path: '/menu/create',
        name: 'menu.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/menu/CreateMenu.vue')
    },
    {
        path: '/menu/edit/:id',
        name: 'menu.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/menu/EditMenu.vue')
    },

    // Profile
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