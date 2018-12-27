<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">Image Storage</router-link>

        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="item">Galleries</router-link>
                <router-link to="/upload" class="item">Upload</router-link>

                <!--No need to convert to router-link since this link does not affect navigation-->
                <a class="item" @click="logout">Logout</a>
            </div>

            <a v-else href="#" class="ui item" @click="login">Login</a>
        </div>

    </div>
</template>

<script>
    //use mapActions to map store actions to component
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'AppHeader',
        computed: mapGetters(['isLoggedIn']),
        methods: {
            //This allows us to list other methods
            //in methods that are not actions
            ...mapActions(['login', 'logout'])
        }
    };
</script>

<style scoped>
    .horizontal {
        display: flex;
        flex-direction: row;
    }
</style>