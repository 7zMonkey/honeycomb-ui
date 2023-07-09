<script>
  import "./icon.less"
  let classNames = ['hc-icon'];
  export let className = '';
  export let name = '';
  export let size = '';
  export let color = '';
  export let style = '';
  const styleArray = [];

  classNames.push(className);

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
</script>

<i class={className} {style}></i>