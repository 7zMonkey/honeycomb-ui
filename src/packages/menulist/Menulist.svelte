<script>
  import { createEventDispatcher } from 'svelte';
  import './Menulist.less';
  import MenuList from './Menulist.svelte';
  import Icon from '../icon/Icon.svelte';

  const change = createEventDispatcher();
  const classNames = ['hc-menu-list']
  export let data = []
  export let value;
  const className = classNames.join(' ')
  const onClick = (row, func) => {
    value = row.id
    if (func) {
      func(row.id, row)
    }
  }
  $: if (value) {
    change(value)
  }
  const onKeydown = () => {}
  const hasChildWithValue = (item, value) => {
  console.log(item, value, !value)
  if (!value) {
    return false;
  }
  if (item.children) {
    if (item.children.some(v => v.id === value)) {
      return true;
    } else {
      for (let i = 0; i < item.children.length; i++) {
        if (hasChildWithValue(item.children[i], value)) {
          return true;
        }
      }
    }
  }
  return false;
}
</script>

<div class={className}>
  {#each data as item, index }
    {#if !item.type || item.type === 'item'}
      <div 
        class="hc-menu-list__item"
        class:active={value === item.id}
        data-id={item.id || index}
        on:click={onClick(item, item.onClick)}
        on:keydown={onKeydown}
      >
        { item.lable }
      </div>
    {/if}

    {#if item.type === 'line'}
      <div class="hc-menu-list__line" data-id={item.id || index}>
        <div class="hc-menu-list__line-title">
          {item.lable||''}
        </div>
      </div>
    {/if}

    {#if item.type === 'title'}
      <div class="hc-menu-list__title" data-id={item.id || index}>
        {item.lable||''}
      </div>
    {/if}

    {#if item.type === 'group'}
      <div class="hc-menu-list__group" data-id={item.id || index}>
        <div class="hc-menu-list__group-title">
          { item.lable }
        </div>
        <div class="hc-menu-list__group-content" data-id={item.id || index}>
        <MenuList data={item.children} bind:value={value}></MenuList>
        </div>
      </div>    
    {/if}

    {#if item.type === 'submenu'}
      <div class="hc-menu-list__sub-menu" data-id={item.id || index}>
        <!-- active向下遍历所有 -->
        <div class="hc-menu-list__sub-menu-title" class:active={hasChildWithValue(item, value)}>
          { item.lable }
          <Icon className="hc-menu-list__sub-menu-icon" name="chevron-right"></Icon>
        </div>
        <div class="hc-menu-list__sub-menu-content" data-id={item.id || index}>
          <MenuList data={item.children} bind:value={value}></MenuList>
        </div>
      </div>
    {/if}
  {/each}
</div>