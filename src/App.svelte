<script>

import Router from 'svelte-spa-router'
import {routes} from './routes'
import {link} from 'svelte-spa-router'
import Button from './packages/button/Button.svelte'
import Container from './packages/container/Container.svelte';

let links = [
  { lable: 'button', path: '/button' },
  { lable: 'container', path: '/container'},
  { lable: 'menu', path: '/menu'}
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
  <div class="container">
    <div class="main-container">
      <Router {routes}/>
    </div>
    <footer>
      <a href="https://github.com/7zMonkey/honeycomb-ui">
        Github
      </a>
    </footer>
  </div>
</div>

<style lang="less">
.links {
  display: flex;
  flex-direction: column;
  padding: 8px;
}
.link {
  margin-bottom: 8px;
}
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
}
.container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.container .main-container {
  width: 100%;
  min-height: calc(100% - 44px);
  overflow-x: auto;
}
.container footer {
  box-sizing: border-box;
  padding: 0 8px;
  width: 100%;
  background: #333;
  height: 44px;
  color: #fff;
  display: flex;
  justify-content: start;
  align-self: center;
}
.container footer a {
  color: #fff;
  line-height: 44px;
  text-decoration: none;
  margin-right: 8px;
}
</style>