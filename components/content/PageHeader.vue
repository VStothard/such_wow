<template>
    <div>
        <h1>{{headline}}</h1>
        <p>{{subheadline}}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    //to be replaced with data store and api calls
    data() {
        return {
            headline: "this is the headline",
            subheadline: "and yah know this is the sub text "
        }
    }
}
</script>
