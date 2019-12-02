<template>
    <div>
        <h1> {{post.title}} </h1>
        <h3> {{post.text}} </h3>
        <span> created at: {{post.createdAt | formatDate}} {{ post.createdAt | diffForHumans }} </span>
        <div class="list-group">
            <h4>Comments: </h4>
            <li class="list-group-item" v-for="comment in comments" :key="comment.id">
                {{ comment.text }}
            </li>
        </div>

        <add-comment @commentAdded="addComment"> </add-comment>
    </div>    
</template>

<script>
import { DateMixin } from '../mixins'
import AddComment from './AddComment'
import { postService } from '../services/post-service'
export default {
    components: {
        AddComment
    },

    data() {
        return {
            post: {}
        }
    },

    created() {
        postService.getOne(this.$route.params.id)
        .then(response =>
        this.post = response.data)
    }, 

    computed: {
        comments() {
            return this.post.comments ? this.post.comments : []
        }
    },

    methods: {
    addComment (comment) {
      postService.addComment(comment, this.post.id)
        .then(() => {postService.getOne(this.post.id)
        .then((response) => {this.post = response.data})
        })
    }
  },

  mixins: [ DateMixin ]
}
</script>

<style>

body{
	font-family: Arial, Helvetica, sans-serif;
	box-sizing: content-box;
}
.container{
	background-color: #f5f5f5;
	border-radius: 89px;
}

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

</style>