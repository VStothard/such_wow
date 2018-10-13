<template>
    <section>
        <div class="flex flex-wrap">
             <BlogTile 
            v-for="post in posts" 
            :key="post.postID"
            :post="post"
            class="blogTile-spacing w-1/3 border" />
        </div>
        <Button></Button>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                posts: [
                    {
                        postID: "01",
                        postTitle: "Title one"
                    },
                    {
                        postID: "02",
                        postTitle: "Tittle 2"
                    },
                    {
                        postID: "03",
                        postTitle: "Tittle 3"
                    },
                    {
                        postID: "04",
                        postTitle: "Tittle four"
                    },
                    {
                        postID: "05",
                        postTitle: "Title five"
                    },
                    {
                        postID: "06",
                        postTitle: "Tittle 6"
                    },
                    {
                        postID: "07",
                        postTitle: "Tittle 7"
                    },
                    {
                        postID: "08",
                        postTitle: "Tittle eight"
                    }
                ]
            }
        }
    }
</script>

<style scss>
    .blogTile-spacing {
        /* border: 2px solid red; */
        /* @apply px-4; */
    }

    .blogTile-spacing:nth-of-type(3n + 1),
    .blogTile-spacing:first-child {
        /* border: 2px solid blue; */
        /* @apply pl-0 pr-4; */
    }

    .blogTile-spacing:nth-of-type(3n + 3) {
        /* @apply pr-0 pl-4; */
    }
</style>