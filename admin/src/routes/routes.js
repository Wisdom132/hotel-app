import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import timer from 'src/pages/timer.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import home from 'src/pages/home.vue'
import login from '@/components/login.vue'
import contact from 'src/pages/contact'
import contactInfo from '@/components/contact/contactInfo'

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview
      },
      {
        path: "adduser",
        name: "User",
        component: UserProfile
      },
      {
        path: "allusers",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "timer",
        name: "timer",
        component: timer
      },
      {
        path: "maps/:id",
        name: "Maps",
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "contact",
        name: "contact",
        component: contact
      },
      {
        path: "contactInfo/:id",
        name: "contactInfo",
        component: contactInfo
      },
      
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/
export default routes
