import Vue from 'vue'
import Router from 'vue-router'
import body from '@/components/body'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'body',
      component: body
    }
  ]
})
