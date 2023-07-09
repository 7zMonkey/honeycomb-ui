<script>
// @ts-nocheck

  import { createEventDispatcher } from 'svelte';
  import './Menulist.less';
  import MenuList from './Menulist.svelte';

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
        <div class="hc-menu-list__sub-menu-title" class:active={item.children.some((v) => v.id === value)}>
          { item.lable }
        </div>
        <div class="hc-menu-list__sub-menu-content" data-id={item.id || index}>
          <MenuList data={item.children} bind:value={value}></MenuList>
        </div>
      </div>
    {/if}
  {/each}
</div>