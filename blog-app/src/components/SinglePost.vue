<template>
  <div>
      <h1> {{post.title}} </h1>
      <h3> {{post.text}} </h3>

        <!-- <div> 
            <form class="form-group" @submit.prevent="addComment">
            <input placeholder="Your comment" type="text" v-model="comment.text" required/>
            <button type="submit" class="btn btn-primary"> Add </button>
            </form>
        </div> -->

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