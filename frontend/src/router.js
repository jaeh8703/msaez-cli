
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import Bc2Agg1Manager from "./components/listers/Bc2Agg1Cards"
import Bc2Agg1Detail from "./components/listers/Bc2Agg1Detail"


import Bc1View1View from "./components/Bc1View1View"
import Bc1View1ViewDetail from "./components/Bc1View1ViewDetail"
import Bc1View222View from "./components/Bc1View222View"
import Bc1View222ViewDetail from "./components/Bc1View222ViewDetail"
import Bc3Agg1Manager from "./components/listers/Bc3Agg1Cards"
import Bc3Agg1Detail from "./components/listers/Bc3Agg1Detail"

import Bc5Agg1Manager from "./components/listers/Bc5Agg1Cards"
import Bc5Agg1Detail from "./components/listers/Bc5Agg1Detail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/bc2Agg1s',
                name: 'Bc2Agg1Manager',
                component: Bc2Agg1Manager
            },
            {
                path: '/bc2Agg1s/:id',
                name: 'Bc2Agg1Detail',
                component: Bc2Agg1Detail
            },


            {
                path: '/bc1View1s',
                name: 'Bc1View1View',
                component: Bc1View1View
            },
            {
                path: '/bc1View1s/:id',
                name: 'Bc1View1ViewDetail',
                component: Bc1View1ViewDetail
            },
            {
                path: '/bc1View222s',
                name: 'Bc1View222View',
                component: Bc1View222View
            },
            {
                path: '/bc1View222s/:id',
                name: 'Bc1View222ViewDetail',
                component: Bc1View222ViewDetail
            },
            {
                path: '/bc3Agg1s',
                name: 'Bc3Agg1Manager',
                component: Bc3Agg1Manager
            },
            {
                path: '/bc3Agg1s/:id',
                name: 'Bc3Agg1Detail',
                component: Bc3Agg1Detail
            },

            {
                path: '/bc5Agg1s',
                name: 'Bc5Agg1Manager',
                component: Bc5Agg1Manager
            },
            {
                path: '/bc5Agg1s/:id',
                name: 'Bc5Agg1Detail',
                component: Bc5Agg1Detail
            },



    ]
})
