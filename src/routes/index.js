import {wrap} from 'svelte-spa-router/wrap'
const routes = {
  '/button': wrap({
      asyncComponent: () => import('../examples/button.svelte')
  }),
  '/container': wrap({
    asyncComponent: () => import('../examples/container.svelte')
}),
}

export { routes }