<template>
    <div>
        <h1>{{headline}}</h1>
        <div class="mt-2">
            <p class="">{{subheadline}}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    //to be replaced with data store and api calls
    data() {
        return {
            headline: "this is the headline",
            subheadline: "and yah know this is the sub text"
        }
    }
}
</script>
