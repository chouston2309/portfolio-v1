import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projects from '../views/Projects.vue'
import Vertex from '../views/ProjectsFiles/Vertex/Vertex.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/vertex',
    name: 'vertex',
    component: Vertex
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
