<script lang="ts">
  import Header from './header.svelte';
  import Course from './course.svelte';
</script>

<style lang="scss">
  :global(body, h1, h2, h3, h4, h5, h6) {
    font: normal 24pt Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
    color: #2d2d2d;
    cursor: default;
    margin: 0;
    padding: 0;
  }

  .body {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>

<Header />
<div class="body">
  <Course />
</div>