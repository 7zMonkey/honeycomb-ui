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
}

export { routes }