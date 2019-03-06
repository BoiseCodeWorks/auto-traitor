import Vue from 'vue'
import Router from 'vue-router'
import Cars from './views/Cars.vue'
import CarDetails from './views/CarDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //prevents this route from loading and forwards to 'Cars'
      redirect: 'Cars'
    },
    {
      path: '/cars',
      name: 'Cars',
      component: Cars
    },
    {
      path: '/cars/:id',
      name: 'CarDetails',
      props: true,
      component: CarDetails
    }

  ]
})
