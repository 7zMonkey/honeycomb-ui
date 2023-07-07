<script>
  import './Menu.less'
  const classNames = ['hc-menu']
  export let mode = 'vertical'
  export let width = '240px'
  export let active = null

  if (mode) {
    classNames.push(`hc-menu-${mode}`)
  }

  const className = classNames.join(' ')
</script>

<div class={className} style={`width: ${width};`}>
  <slot active={active}></slot>
</div>