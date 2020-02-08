import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import menus from '@/config/menu-config'

Vue.use(Router)

var routes= [
  //默认路径下显示该路由
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main,
    children:[]
  }
]

routes.forEach((it)=>{
  if(it.name==='Main'){
    menus.forEach((item) => {
      item.sub.forEach((sub) => {
        it.children.push({
          path: `/${item.id}`,
          name: item.name,
          component: () => import(`@/components/${item.id}/${item.id}`),
          children:[{
            path: `/${sub.componentName}`,
            name: item.name,
            component: () => import(`@/components/${item.id}/${sub.componentName}`)
          }]
        })
      })
    })
  }
})

export default new Router({routes})