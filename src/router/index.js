import { createRouter, createWebHistory } from 'vue-router';
import DashBoardView from '@/views/DashBoardView.vue';
import HomeView from '@/views/HomeView.vue';
import PayrollView from '@/views/PayrollView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/dashboard', name: 'Dashboard', component: DashBoardView },
  { path: '/payroll', name: 'Payroll', component: PayrollView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

