<script>
import Button from "../packages/button/Button.svelte";
import Icon from "../packages/icon/Icon.svelte";
import FontaObj from "bootstrap-icons/font/bootstrap-icons.json";

const FontaObjKeys = Object.keys(FontaObj);
</script>

<main>
  <div class="icon-list">
    {#each FontaObjKeys as key}
    <div id={key} class="icon-item">
      <div class="icon-container">
        <Icon name={key} size="24px" />
      </div>
      <span>{key}</span>
    </div>
    {/each}
  </div>
</main>
<style>
  main {
    padding: 20px;
    background-color: #fff;
    display: flex;
  }

  .icon-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 160px;
    margin: 8px;
  }

  .icon-container {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-radius: 4px;
    background-color: #F9FAFB;
    transition: all 0.25s;
  }
  
  .icon-item:hover .icon-container{
    background-color: #E5E7EB;
  }

  .icon-item span {
    color: #475569;
    font-size: 14px;
    line-height: 24px;
    margin-top: 8px;
    white-space: nowrap;
    transition: all 0.25s;
  }
  .icon-item:hover span {
    color: #F97316;
  }
</style>