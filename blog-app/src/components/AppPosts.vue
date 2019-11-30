<template>
  <div class="hello">
    <div>
      <h4>Posts</h4>
      <ul v-for="post in posts" :key="post.id">
        <span></span>
        <li>
          <span> created at: {{ post.createdAt | diffForHumans }} </span>
          <span> comments: {{post.comments.length}} </span> |
          {{post.title}}
          <button class="btn btn-primary" @click="navigateToViewPost(post.id)">View post</button>
          <button class="btn btn-info" @click="navigateToEdit(post.id)">Edit</button>
         <button type="submit" class="btn btn-danger" @click="deletePost(post.id)"> Delete </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { DateMixin } from '../mixins'
import { postService } from '../services/post-service'
export default {
  name: 'AppPosts',
    data() {
      return {
         posts: [],
      }
    },

    created() {
      postService.getAll()
      .then(response => 
      this.posts = response.data)
    },

    methods: {
      navigateToViewPost(id) {
        this.$router.push( {name: 'view', params: {id}} )
      },

      navigateToEdit(id){
        this.$router.push({name: 'edit', params: {id}} )
      },

      deletePost(id) {
        postService.delete(id)
        .then(this.posts = this.posts.filter(post => post.id !== id))
      }
    },

    mixins: [ DateMixin ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
