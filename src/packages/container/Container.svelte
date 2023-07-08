<script>

  import './Container.less'
  const classNames = ['hc-container']
  let cursorIoc;
  let container;
  let resizer;
  let body;
  export let width = '200px';
  export let minWidth = 200;
  export let maxWidth = 600;
  export let height = '200px';
  export let minHeight = 200;
  export let maxHeight = 600;
  export let resize = '';
  export let key = '';
  export let storage = false;
  // 定义一个变量代表鼠标左键按下
  let isMouseDown = false;

  if (resize) {
    classNames.push('is-resize')
  } else {
    resize = 'none'
  }

  if (resize === 'horizontal') {
    classNames.push('is-horizontal')
  }

  if (resize === 'vertical') {
    classNames.push('is-vertical')
  }

  if (key&&storage) {
    const storage = JSON.parse(window.localStorage.getItem('containerStorage'))
    const KeyStorage = storage?.[key]
    if (KeyStorage && KeyStorage.width) {
      width = KeyStorage.width
    }
    if (KeyStorage && KeyStorage.height) {
      height = KeyStorage.height
    } 
  }

  const className = classNames.join(' ')
  const onResizeMouseDown = () => {
    isMouseDown = true
    onResizeMouseMove = __onResizeMouseMove
  }
  let onResizeMouseMove = null
  let __onResizeMouseMove = (e) => {
    if (e.buttons === 0) {
      isMouseDown = false
      onResizeMouseMove = null
      document.documentElement.style.cursor = 'auto'
      document.documentElement.style.userSelect = 'auto'
      return
    }
    if (e.buttons === 1 && isMouseDown) {
      const { clientX, clientY } = e;
      // 如果container不在0, 0的位置 则 需要减去container的left和top
      if (resize !== 'vertical') {
        console.log('resize mouse move', maxWidth)
        let width = clientX - container.offsetLeft;
        if (width < minWidth) width = minWidth;
        if (width > maxWidth) width = maxWidth;
        container.style.width = `${width}px`;
      }
      if (resize !== 'horizontal') {
        let height = clientY - container.offsetTop;
        if (height < minHeight) height = minHeight;
        if (height > maxHeight) height = maxHeight;
        container.style.height = `${height}px`;
      }
      if (storage&&key) {
        const storage = JSON.parse(window.localStorage.getItem('containerStorage')) ?? {}
        let KeyStorage = storage[key]
        if (!KeyStorage) {
          storage[key] = {}
          KeyStorage = storage[key]
        }
        if (KeyStorage) {
          if (resize !== 'vertical') {
            KeyStorage.width = container.style.width
          }
          if (resize !== 'horizontal') {
            KeyStorage.height = container.style.height
          }
        } else {
          storage[key] = {
            width: container.style.width,
            height: container.style.height
          }
        }
        window.localStorage.setItem('containerStorage', JSON.stringify(storage))
      }
      document.documentElement.style.userSelect = 'none'
      if (resize !== 'vertical' && resize !== 'horizontal') {
        // 修改 body 的 cursor\
        document.documentElement.style.cursor = 'nwse-resize'
      } else if (resize === 'vertical') {
        document.documentElement.style.cursor = 'ns-resize'
      } else if (resize === 'horizontal') {
        document.documentElement.style.cursor = 'ew-resize'
      }
    }
  }
</script>

<svelte:body bind:this={body} on:mousemove={onResizeMouseMove} style={`cursor: ${cursorIoc}`} />
<div bind:this={container} class={className} style={`width: ${width};height: ${height}`}>
  <div class="hc-container__inner">
    <slot></slot>
  </div>
  <div
    bind:this={resizer}
    class="hc-container__resize"
    class:isMouseDown
    on:mousedown={onResizeMouseDown}
  ></div>
</div>