<template>
    <div>
        Please wait...
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    //This life cycle is the optimal spot to do some 
    //data loading
    created() {
        this.finalizeLogin(window.location.hash);
    }
}
</script>
