import { createRouter, createWebHistory } from 'vue-router';
import DashBoardView from '@/views/DashBoardView.vue';
import HomeView from '@/views/HomeView.vue';
import PayrollView from '@/views/PayrollView.vue';

import AttendanceView from '@/views/AttendanceView.vue';
import LeaveRequestViwe from '@/views/LeaveRequestViwe.vue';
import EmployeesDetailsView from '@/views/EmployeesDetailsView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/dashboard', name: 'Dashboard', component: DashBoardView },
  { path: '/employees', name: 'Employees', component: EmployeesDetailsView },
  { path: '/attendance', name: 'Attendance', component: AttendanceView },
  { path: '/leaveRequests', name: 'LeaveRequests', component: LeaveRequestViwe },
  { path: '/payroll', name: 'Payroll', component: PayrollView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

