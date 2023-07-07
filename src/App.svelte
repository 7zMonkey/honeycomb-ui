<script>

import Router from 'svelte-spa-router'
import {routes} from './routes'
import {link} from 'svelte-spa-router'
import Button from './packages/button/Button.svelte'
import Container from './packages/container/Container.svelte';

let links = [
  { lable: 'button', path: '/button' },
  { lable: 'container', path: '/container'}
] 
</script>

<div class="page">
  <Container width="400px" height="100vh" maxWidth={800} resize="horizontal" key="section" storage>
    <section class="links">
      {#each links as item}
        <a class="link" href={item.path} use:link>
          <Button round plain>{item.lable}</Button>
        </a>
      {/each}
    </section>
  </Container>
  <main>
    <Router {routes}/>
  </main>
</div>

<style>
.links {
  display: flex;
  flex-direction: column;
  padding: 8px;
}
.link {
  margin-bottom: 8px;
}
.page {
  display: flex;
  overflow: hidden;
}
</style>