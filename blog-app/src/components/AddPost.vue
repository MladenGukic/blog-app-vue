<template>
  <div>
        <form @submit.prevent="addPost">
            <input placeholder="Post title" type="text" v-model="form.title" />
            <input placeholder="Post text" type="text" v-model="form.text" />
            <button type="submit" class="btn btn-primary"> Submit </button>
        </form>
  </div>  
</template>

<script>
import { postService } from '../services/post-service'
export default {
    data() {
        return {
             form: {title: "", text: ""},
        }
    },

    methods: {
        addPost() {
            postService.add(this.form)
            .then(() => this.$router.push("/"))
        }
    }
}
</script>

<style>

</style>