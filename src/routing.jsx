import DashBoard from './pages/DashBoard.jsx';

const myRoutes = [
  { path: '/', label: 'Accueil', component: <DashBoard /> },
  { path: '/profil', label: 'Profil', component: <DashBoard /> },
  { path: '/settings', label: 'Réglage', component: <DashBoard /> },
  { path: '/community', label: 'Communauté', component: <DashBoard /> },
];
export default myRoutes;

