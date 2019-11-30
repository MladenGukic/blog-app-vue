<template>
    <div class="form-group"> 
        <form class="form-group" @submit.prevent="onSubmit">
            <textarea placeholder="Your comment" v-model="comment.text" required/>
            <button type="submit" class="btn btn-primary"> Add </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            comment: {text: ""}
        }
    },

    methods: {
        onSubmit() {
            this.$emit('commentAdded', this.comment)
            this.comment = {text: ""}
        }
    }
}
</script>

<style>

</style>