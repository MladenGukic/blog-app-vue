<template>
  <div>
        <form @submit.prevent="addPost">
            <input placeholder="Post title" type="text" v-model="form.title" />
            <input placeholder="Post text" type="text" v-model="form.text" />
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

        }
    },

    methods: {
        addPost() {
            postService.add(this.form)
            .then(() => this.$router.push("/"))
        },

        resetForm() {
            this.form = this.defaultForm()
        }, 

        defaultForm() {
            return {title: "", text: ""}
        }
    }
}
</script>

<style>

</style>