<script>
  import './MenuItemGroup.less'
  const classNames = ['hc-menu-item-group']

  export let title = ''
  const className = classNames.join(' ')
</script>

<div class={className}>
  <span class="hc-menu-item-group__title"> {title} </span>
  <div class="hc-menu-item-group__inner">
    <slot></slot>
  </div>
</div>