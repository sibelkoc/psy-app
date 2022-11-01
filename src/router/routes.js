
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/HomePage.vue') 
      },

      { 
        path: '/about', 
        component: () => import('pages/About.vue') 
      },

      { 
        path: '/prices', 
        component: () => import('pages/Prices.vue') 
      },

      { 
        path: '/appointment', 
        component: () => import('pages/Appointment.vue') 
      },


      { 
        path: '/contact', 
        component: () => import('pages/Contact.vue') 
      },

      { 
        path: '/login', 
        component: () => import('pages/Login.vue') 
      },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
