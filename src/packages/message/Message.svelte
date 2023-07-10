<script>
    import Icon from '../icon/Icon.svelte'
    import './Message.less'
    /**
     * @typedef {Object} Message
     * @property {string} type - 消息类型
     * @property {string} content - 消息内容
     * @property {string} icon - 消息标题
     * @property {string} [duration] - 消息持续时间 默认 2000ms
     */
    /**
     * @prop {Message} data - 数据列表
     */
    export let data = []
    let icons = {
      success: 'check-circle',
      warning: 'exclamation-circle',
      error: 'x-circle-fill',
      info: 'info-circle'
    }
</script>

<div class="hc-message-list">
  {#each data as item}
    <div class={`hc-message hc-message--${item.type}`}>
      <div class="hc-message__icon">
        <Icon name={icons[item.type]}></Icon>
      </div>
      <div class="hc-message__inner">
        { item.content }
      </div>
    </div>
  {/each}
</div>