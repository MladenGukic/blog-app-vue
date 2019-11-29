<template>
  <div>
      <h1> {{post.title}} </h1>
      <h3> {{post.text}} </h3>
  </div>    
</template>

<script>
import { postService } from '../services/post-service'
export default {
    data() {
        return {
            post: {}
        }
    },

    created() {
        postService.getOne(this.$route.params.id)
        .then(response =>
        this.post = response.data)
    }
}
</script>

<style>

</style>