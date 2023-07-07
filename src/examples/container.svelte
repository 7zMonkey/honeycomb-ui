<script>
  import Container from "../packages/container/Container.svelte";
</script>

<main>
  <Container width="400px" height="400px" resize="horizontal"></Container>
  <Container width="400px" height="400px" resize="vertical"></Container>
  <Container width="400px" height="400px" key="memory" storage>记忆尺寸大小</Container>
</main>

<style>
  main {
    padding: 20px;
    background-color: #fff;
    display: flex;
  }
</style>
