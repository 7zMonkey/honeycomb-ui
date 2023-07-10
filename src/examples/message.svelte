<script>
    import Button from "../packages/button/Button.svelte";
    import { msg } from "../packages/message/Message.js";
    const infoMsg = (m = '') => msg({type: 'info', content: m})
    const successMsg = (m = '') => msg({type: 'success', content: m})
    const warningMsg = (m = '') => msg({type: 'warning', content: m})
    const errorMsg = (m = '') => msg({type: 'error', content: m})
</script>

<main>
  <Button type="primary" on:click={v => infoMsg('这是一条普通消息')}>Info</Button>
  <Button type="success" on:click={v => successMsg('测试成功')}>Success</Button>
  <Button type="warning" on:click={v => warningMsg('请勿重复点击')}>Warning</Button>
  <Button type="danger" on:click={v => errorMsg('消息发送失败')}>Error</Button>
</main>

<style>
  main {
    padding: 20px;
  }
</style>