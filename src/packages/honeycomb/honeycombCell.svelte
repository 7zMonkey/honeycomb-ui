
<!-- 当前页面生成的是一个一个的六边形蜂窝，他有基础的边框 -->

<script>
  export let size = 'default'
  export let border = true

  let classNames = ['hc-honeycomb-cell']

  if (size && size !== 'default') {
    classNames.push(`hc-honeycomb-cell--${size}`)
  }

  if (border) {
    classNames.push('hc-honeycomb-cell--border')
  }

  const className = classNames.join(' ')
</script>

<div class={className}></div>

<style>
  /* 六边形的 .hc-honeycomb-cell */
  /* 正六边形按照半径算距离 */
.hc-honeycomb-cell {
  width: 160px;
  height: 160px;
  margin: 20%;
  border-radius: 50%;
  background: #333;
}
.hc-honeycomb-cell.hc-honeycomb-cell--medium {
  width: 140px;
  height: 140px;
}
.hc-honeycomb-cell.hc-honeycomb-cell--small {
  width: 120px;
  height: 120px;
}
.hc-honeycomb-cell.hc-honeycomb-cell--mini {
  width: 100px;
  height: 100px;
}

</style>