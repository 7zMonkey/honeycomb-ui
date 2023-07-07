<script>
  // 测试 button 组件
  import Button from '../packages/button/Button.svelte'
  import ButtonGroup from '../packages/button-group/ButtonGroup.svelte'
  </script>
  
  <main>
    <div class="button">
      <Button size="medium" mark="Ctrl+S">保存</Button>
      <Button type="primary" size="medium" mark="Ctrl+S">保存</Button>
      <Button type="info" size="medium" mark="Ctrl+S">保存</Button>
      <Button type="danger" round size="medium" mark="Ctrl+S">保存</Button>
      <Button type="success" plain round size="medium" mark="Ctrl+S">保存</Button>
    </div>
    <div class="button">
      <Button>按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="success">按钮</Button>
      <Button type="info">按钮</Button>
      <Button type="warning">按钮</Button>
      <Button type="danger">按钮</Button>
    </div>
  
    <div class="button">
      <Button round>按钮</Button>
      <Button round type="primary">按钮</Button>
      <Button round type="success">按钮</Button>
      <Button round type="info">按钮</Button>
      <Button round type="warning">按钮</Button>
      <Button round type="danger">按钮</Button>
    </div>
  
    <div class="button">
      <Button circle>按钮</Button>
      <Button circle type="primary">按钮</Button>
      <Button circle type="success">按钮</Button>
      <Button circle type="info">按钮</Button>
      <Button circle type="warning">按钮</Button>
      <Button circle type="danger">按钮</Button>
    </div> 
  
    <div class="button">
      <Button plain>按钮</Button>
      <Button plain type="primary">按钮</Button>
      <Button plain type="success">按钮</Button>
      <Button plain type="info">按钮</Button>
      <Button plain type="warning">按钮</Button>
      <Button plain type="danger">按钮</Button>
    </div> 
  
    <div class="button">
      <Button disabled>按钮</Button>
      <Button disabled type="primary">按钮</Button>
      <Button disabled type="success">按钮</Button>
      <Button disabled type="info">按钮</Button>
      <Button disabled type="warning">按钮</Button>
      <Button disabled type="danger">按钮</Button>
    </div> 
  
    <div class="button">
      <Button>按钮</Button>
      <Button size="medium">按钮</Button>
      <Button size="small">按钮</Button>
      <Button size="mini">按钮</Button>
    </div> 
    
    <div class="button">
      <Button loading>按钮</Button>
      <Button loading size="mini" >按钮</Button>
      <Button loading circle type="danger">按钮</Button>
      <Button loading round plain type="danger">按钮</Button>
    </div> 
  
    <div class="button">
      <ButtonGroup>
        <Button loading circle>按钮</Button>
        <Button circle type="primary">按钮</Button>
        <Button loading circle type="success">按钮</Button>
        <Button circle type="info">按钮</Button>
        <Button loading circle type="warning">按钮</Button>
        <Button circle type="danger">按钮</Button>
      </ButtonGroup>
    </div> 
  
    <div class="button">
      <ButtonGroup>
        <Button loading round plain>按钮</Button>
        <Button round plain type="primary">按钮</Button>
        <Button loading round plain type="success">按钮</Button>
        <Button round plain type="info">按钮</Button>
        <Button loading round plain type="warning">按钮</Button>
        <Button round plain type="danger">按钮</Button>
      </ButtonGroup>
    </div> 
    <div class="button">
      <ButtonGroup>
        <Button circle plain>按钮</Button>
        <Button round plain type="primary">按钮</Button>
        <Button round plain type="success">按钮</Button>
      </ButtonGroup>
    </div> 
    <div class="button">
      <ButtonGroup>
        <Button loading plain>按钮</Button>
        <Button loading plain type="primary">按钮</Button>
        <Button loading circle plain type="success">按钮</Button>
      </ButtonGroup>
    </div> 
    <div class="button">
      <ButtonGroup>
        <Button round type="primary">按钮</Button>
        <Button loading plain type="primary">按钮</Button>
      </ButtonGroup>
    </div> 
    <div class="button">
      <ButtonGroup>
        <Button round size="medium">按钮</Button>
        <Button round size="small">按钮</Button>
        <Button round size="mini">按钮</Button>
      </ButtonGroup>
    </div> 
  </main>
  
  <style>
  .button {
    margin: 8px;
  }
  </style>
