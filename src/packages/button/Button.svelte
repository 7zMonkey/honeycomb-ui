<script>
  import './Button.less'

  // const className = 'hc-button--primary'
  // 获取传入的属性 size type disabled loading plain round circle icon autofocus
  export let size = 'default'
  export let type = 'default'
  export let disabled = false
  export let loading = false
  export let plain = false
  export let round = false
  export let circle = false
  export let icon = ''
  export let autofocus = false
  export let percentage = 0
  export let mark = ''

  let classNames = ['hc-button']

  if (size && size !== 'default') {
    classNames.push(`hc-button--${size}`)
  }

  if (type) {
    classNames.push(`hc-button--${type}`)
  }

  if (disabled) {
    classNames.push('is-disabled')
  }

  if (percentage>100) {
    percentage = 0
  }

  if (percentage>0) {
    classNames.push('is-percentage')
    loading = true
  }

  if (loading) {
    classNames.push('is-disabled')
    classNames.push('is-loading')
  }

  if (plain) {
    classNames.push('is-plain')
  }

  if (round) {
    classNames.push('is-round')
  }

  if (circle) {
    classNames.push('is-circle')
  }

  if (icon) {
    classNames.push('is-icon')
  }

  if (autofocus) {
    classNames.push('is-autofocus')
  }

  if ($$slots.mark || mark) {
    classNames.push('is-mark')
  }

  const className = classNames.join(' ')
</script>

<button 
  class={className}
  disabled={disabled||loading}
  on:click
	on:contextmenu
	on:dblclick
	on:focusin
	on:mousedown
	on:mouseup
	on:focusout
	on:keydown
	on:keyup
	on:pointercancel
	on:pointerdown
	on:pointerenter
	on:pointerleave
	on:pointermove
	on:pointerout
	on:pointerup
	on:input
>
  <span>
    <slot></slot>
  </span>
  <span class="hc-button__mark">
    <slot name="mark"></slot>
    { mark }
  </span>
  <div
    class="hc-button__percentage"
    style={`left:-${100 - percentage}%`}
  ></div>
</button>