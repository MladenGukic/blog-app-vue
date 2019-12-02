<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-primary navbar-light" >
      <ul class="nav-bar-nav">
        <li class="nav-item active">
      <router-link class="nav-link" to='/posts'> Posts </router-link>
        </li>
        <li class="nav-item active">
      <router-link class="nav-link" to='/add'> Add </router-link>
        </li>
    </ul>
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

.nav-link {
   color: rgba(255,255,255,.5)
}

</style>
