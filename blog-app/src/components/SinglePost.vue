<template>
    <div>
        <h1> {{post.title}} </h1>
        <h3> {{post.text}} </h3>
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
  }
}
</script>

<style>

</style>