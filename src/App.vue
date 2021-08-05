<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import home from "./views/home/home";

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
