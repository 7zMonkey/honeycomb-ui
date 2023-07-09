<script>
  import MenuList from '../packages/menulist/Menulist.svelte';
  const data = [
    {
      id: '1',
      type: 'item',
      lable: '菜单项1',
      onClick: () => {
        console.log('菜单项1')
      }
    },
    {
      id: '2.5',
      type: 'item',
      lable: '菜单项2.5',
      disabled: true
    },
    {
      type: 'line',
      lable: '分割线'    
    },
        {
      id: '2',
      type: 'item',
      lable: '菜单项2',
      disabled: true,
      onClick: () => {
        console.log('菜单项2')
      }
    },
    {
      type: 'group',
      lable: '分组',
      children: [
        {
          id: '3',
          type: 'item',
          lable: '菜单项3',
          onClick: () => {
            console.log('菜单项3')
          }
        },
        {
          id: '4',
          type: 'item',
          lable: '菜单项4',
          onClick: () => {
            console.log('菜单项4')
          }
        }
      ]
    },
    {
      type: 'line',
    },
    {
      id: 'submenu-1',
      type: 'submenu',
      lable: '子菜单1',
      children: [
        {
          id: '5',
          type: 'item',
          lable: '菜单项5',
          onClick: () => {
            console.log('菜单项5')
          }
        },
        {
          id: '6',
          type: 'item',
          lable: '菜单项6',
          onClick: () => {
            console.log('菜单项6')
          }
        },
        {
          type: 'line',
        },
        {
          id: 'submenu-2',
          type: 'submenu',
          lable: '子菜单2',
          children: [
            {
              id: '7',
              type: 'item',
              lable: '菜单项7',
              onClick: () => {
                console.log('菜单项7')
              }
            },
            {
              id: '8',
              type: 'item',
              lable: '菜单项8',
              onClick: () => {
                console.log('菜单项8')
              }
            },
            {
              type: 'line',
              lable: '分割线'    
            },
            {  
              id: 'submenu-3',
              type: 'submenu',
              lable: '子菜单3',
              children: [
                {
                  id: '9',
                  type: 'item',
                  lable: '菜单项9',
                  onClick: () => {
                    console.log('菜单项9')
                  }
                },
                {
                  id: '10',
                  type: 'item',
                  lable: '菜单项10',
                  onClick: () => {
                    console.log('菜单项10')
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
</script>

<main style="width: 200px">
  <MenuList data={data}></MenuList>
</main>