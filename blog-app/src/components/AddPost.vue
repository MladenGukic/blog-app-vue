<template>
  <div>
        <form @submit.prevent="onSubmit">
            <input placeholder="Post title" type="text" v-model="postForm.title" minlength="2" required/>
            <input placeholder="Post text" type="text" v-model="postForm.text" maxlength="300" required/>
            <button type="submit" class="btn btn-primary"> Submit </button>
            <button type="button" class="btn btn-secondary" @click="resetForm"> Reset </button>
        </form>
  </div>  
</template>

<script>
import { postService } from '../services/post-service'
export default {
    data() {
        return {
             form: {title: "", text: ""},
             post: {}

        }
    },

    created() {
        if(this.$route.params.id) {
            return postService.getOne(parseInt(this.$route.params.id))
            .then(response => this.post = response.data)
        }
    },

    computed: {
        postForm() {
            return !this.$route.params.id ? this.form : this.post
        }
    },

    methods: {
        addPost() {
            postService.add(this.form)
            .then(() => this.$router.push("/"))
        },

        onSubmit() {
            if (this.postForm.id) {
                this.editPost()
            } else {
                this.addPost()
            }
        },

        resetForm() {
            this.form = this.defaultForm()
        }, 

        defaultForm() {
            return {title: "", text: ""}
        },

        editPost() {
            postService.edit(this.postForm.id, this.postForm)
            .then(() => this.$router.push("/"))
        }
    }
}
</script>

<style>

</style>