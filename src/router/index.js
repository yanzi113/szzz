import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/Layout/About.vue'
import Home from '../views/Layout/Home.vue'
import News from '../views/Layout/News.vue'
import Layout from "../views/index.vue"
import Development from '../views/Layout/Development.vue'
import Solution from '../views/Layout/Solution.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path:'/',
        component:Layout,
        children: [
            {
                path:'',
                component: Home      
              },
              {
                path: 'about',
                component: About
              },
              {
                path:'news',
                component:News
              },
              {
                path:'development',
                component:Development
            },
            {
                path:'solution',
                component:Solution
            }
        ]      
    },
  ],})

export default router