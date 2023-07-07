<script>
  import './MenuItem.less'
  const classNames = ['hc-menu-item']
  export let key = null
  export let disabled = false
  export let active = null
  
  if (disabled) {
    classNames.push('is-disabled')
  }
  if (active) {
    classNames.push('is-active')
  }
  const className = classNames.join(' ')
  const onClick = () => {
    if (disabled) {
      return
    }
    active = !active
  }
</script>

<div class={className} data-key={key} on:click={onClick}>
  <slot></slot>
</div>