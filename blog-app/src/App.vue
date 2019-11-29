<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg" >
      <router-link class="nav-item active" to='/posts'> Posts </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
// import AppPosts from './components/AppPosts.vue'

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
