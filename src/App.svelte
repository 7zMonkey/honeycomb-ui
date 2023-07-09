<script>
import Router from 'svelte-spa-router'
import {routes} from './routes'
import {link, push} from 'svelte-spa-router'
import Button from './packages/button/Button.svelte'
import Container from './packages/container/Container.svelte';
import MenuList from './packages/menulist/Menulist.svelte';

let menuData = [
  { type: 'title', lable: '组件' },
  { lable: 'button', id: '/button', onClick: (url) => push(url) },
  { lable: 'container', id: '/container', onClick: (url) => push(url) },
  { type: 'line' },
  { lable: 'menu', id: '/menu', onClick: (url) => push(url) },
  { lable: 'menu-list', id: '/menulist', onClick: (url) => push(url) }
] 

const menuClick = (url) => push(url)
</script>

<div class="page">
  <Container width="300px" height="100vh" maxWidth={440} resize="horizontal" key="section" storage>
    <MenuList data={menuData}></MenuList>
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