<script>
  import "./icon.less"
  let className = '';
  export let name = '';
  export let size = '';
  export let color = '';
  export let style = '';
  const styleArray = [];

  $: {
    let classNames = ['hc-icon'];

    if (name) {
      classNames.push(`bi-${name}`)
    }
    if (size) {
      styleArray.push(`font-size: ${size}`)
    }
    if (color) {
      styleArray.push(`color: ${color}`)
    }
    if (style) {
      styleArray.push(style)
    }
    style = styleArray.join(';')


    className = classNames.join(' ')
    console.log('className:', className)
  }
</script>
<i class={className} {style}></i>