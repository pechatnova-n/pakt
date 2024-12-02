import { createWebHistory, createRouter } from 'vue-router'

import LoginPage from '../pages/LoginPage.vue'
import PersonalAccountPage from '../pages/PersonalAccountPage.vue'

const routes = [
  { path: '/', component: LoginPage },
  {path: '/personal-account', component: PersonalAccountPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})