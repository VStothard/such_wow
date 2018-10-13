<template>
    <section>
        <img src="~/assets/img/woman.jpg" alt="woman" />
        {{post.postTitle}}
    </section>
</template>

<script>
    export default {
        props: {
            post: {
                required: true
            }
        }
    }
</script>