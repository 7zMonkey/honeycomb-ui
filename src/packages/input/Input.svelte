<script>
  import './Input.less'

  // const className = 'hc-button--primary'
  // 获取传入的属性 size type disabled loading plain round circle icon autofocus
  export let size = 'default'
  export let type = 'text'
  export let placeholder = ''
  export let disabled = false
  export let loading = false
  export let plain = false
  export let round = false
  export let circle = false
  export let icon = ''
  export let autofocus = false
  export let percentage = 0
placeholder
  let classNames = ['hc-input']

  if (size && size !== 'default') {
    classNames.push(`hc-input--${size}`)
  }

  if (type) {
    classNames.push(`hc-input--${type}`)
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

  if ($$slots.prefix) {
    classNames.push('is-prefix')
  }

  if ($$slots.suffix) {
    classNames.push('is-suffix')
  }

  const className = classNames.join(' ')
</script>

<div 
  class={className}
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
  <span class="hc-input__prefix">
    <span class="hc-input__prefix-inner">
      <slot name="prefix"></slot>
    </span>
  </span>
  <input class="hc-input__inner" {type} {placeholder} {disabled}/>
  
  <span class="hc-input__suffix">
    <span class="hc-input__suffix-inner">
      <slot name="suffix"></slot>
    </span>
  </span>
  <div
    class="hc-button__percentage"
    style={`left:-${100 - percentage}%`}
  ></div>
</div>