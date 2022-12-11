import { createRouter, createWebHistory } from 'vue-router'
import addProfessor from "../components/professor/AddProfessor.vue";
import editProfessor from "../components/professor/EditProfessor.vue";
import mainPage from "../components/MainPage.vue";
import addSomething from "../components/AddSomething.vue";
import ProfessorPage from "../components/pages/ProfessorPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: mainPage
    },
    {
      path: '/professors',
      name: 'professors',
      component: ProfessorPage
    },
    {
      path: '/professors/:id',
      name: 'professors-details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: editProfessor
     // component: () => import('../components/EditProfessor.vue')
    },
    {
      path: '/add_professor',
      name: 'add-professor',
      component: addProfessor
    },
    {
      path: '/add',
      name: 'add-something',
      component: addSomething
    },
  ]
})

export default router
