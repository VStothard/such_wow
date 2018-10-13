<template>
    <div>
        <PageHeader />
        {{content}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: 'the content will go here. It will need to be html parsed before it is rendered to the page'
        }
    }
}
</script>
