<script>
  import Menu from "../packages/menu/Menu.svelte";
  import MenuItem from "../packages/menu/MenuItem.svelte";
  import MenuItemGroup from "../packages/menu/MenuItemGroup.svelte";
  import SubMenu from "../packages/menu/SubMenu.svelte";

</script>

<Menu mode="horizontal" active="active">
  <MenuItem key="mail"> <a-icon type="mail" />Navigation One </MenuItem>
  <MenuItem key="app" disabled> <a-icon type="appstore" />Navigation Two </MenuItem>
  <SubMenu>
    <MenuItemGroup title="Item 1">
      <MenuItem key="setting:1">
        Option 1
      </MenuItem>
      <MenuItem key="setting:2">
        Option 2
      </MenuItem>
    </MenuItemGroup>
    <MenuItemGroup title="Item 2">
      <MenuItem key="setting:3">
        Option 3
      </MenuItem>
      <MenuItem key="setting:4">
        Option 4
      </MenuItem>
    </MenuItemGroup>
  </SubMenu>
  <MenuItem key="alipay">
    <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
      >Navigation Four - Link</a
    >
  </MenuItem>
</Menu>