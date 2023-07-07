<script>
  // 测试 button 组件
  import Input from './packages/input/Input.svelte'

  const onClick = () => {
    alert('click')
  }
  let percentage = 30

  const addPercentage = () => {
    percentage += 10
  }

  const reducePercentage = () => {
    percentage -= 10
  }
</script>
  
<main>
  <Input placeholder="请输入内容">
    <span slot="prefix">$</span>
    <span slot="suffix">
      0/10
    </span>
  </Input>
</main>

<style>
  main {
    padding: 20px;
  }
</style>
