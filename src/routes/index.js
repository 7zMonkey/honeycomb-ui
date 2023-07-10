import {wrap} from 'svelte-spa-router/wrap'
const routes = {
  '/button': wrap({
      asyncComponent: () => import('../examples/button.svelte')
  }),
  '/container': wrap({
    asyncComponent: () => import('../examples/container.svelte')
  }),
  '/menu': wrap({
    asyncComponent: () => import('../examples/menu.svelte')
  }),
  '/menulist': wrap({
    asyncComponent: () => import('../examples/menulist.svelte')
  }),
  '/icon': wrap({
    asyncComponent: () => import('../examples/icon.svelte')
  }),
  '/message': wrap({
    asyncComponent: () => import('../examples/message.svelte')
  }),
}

export { routes }