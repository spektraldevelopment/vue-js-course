<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">Image Storage</a>

        <div class="right menu">
            <a href="#" class="ui item" @click="login">Login</a>
        </div>

    </div>
</template>

<script>
    //use mapActions to map store actions to component
    import { mapActions } from 'vuex';

    export default {
        name: 'AppHeader',
        methods: {
            //This allows us to list other methods
            //in 
            ...mapActions(['login'])
        }
    };
</script>

<style>
    
</style>