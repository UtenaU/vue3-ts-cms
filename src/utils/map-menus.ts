import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //1.先默认加载所有的routes
  const allRoutes: RouteRecordRaw[] = []
  //到main文件夹下找到各个路由指定文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  console.log(routeFiles.keys())
  routeFiles.keys().forEach((key) => {
    console.log('key', key)
    const route = require('../router/main' + key.split('.')[1])
    console.log('route', route)
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  //递归出口：type === 2
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}
