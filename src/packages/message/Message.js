import Message from './Message.svelte'
class MessageManager {
  /**
   * @typedef {Object} Message
   * @property {string} type - 消息类型
   * @property {string} content - 消息内容
   * @property {string} icon - 消息标题
   * @property {number} [duration] - 消息持续时间 默认 2000ms
   */
  constructor() {
    this.messages = [];
    this.Messager = new Message({
      target: document.body,
      props: {
        data: this.messages
      }
    })

  }

  /**
   * 添加消息
   * @param {Message} message 
   */
  addMessage(message) {
    this.messages.push(message);
    this.Messager.$set({
      data: this.messages
    });
    setTimeout(() => {
      this.removeMessage(message);
    }, message.duration||2000);
  }

  removeMessage(message) {
    const index = this.messages.indexOf(message);
    if (index > -1) {
      this.messages.splice(index, 1);
      this.Messager.$set({
        data: this.messages
      });
    }
  }
}

// 挂载到 window 上，方便调试
const manager = new MessageManager()

export const msg = manager.addMessage.bind(manager)