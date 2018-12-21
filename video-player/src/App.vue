<template>
    <!--Only allowed one root html element-->
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectedVideo"></VideoDetail>

            <!--v-bind: can be shorthanded to :-->
            <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';

    import SearchBar from './components/SearchBar';
    import VideoList from './components/VideoList';
    import VideoDetail from './components/VideoDetail';

    const API_KEY = 'AIzaSyAMhZkB8XdbsXN-aVI-0BjLtyUkwntpLvw';

    export default {
        name: "App",
        components: {
            SearchBar,
            VideoList,
            VideoDetail
        },
        data() {
            //Initialize state for APP
            return {
                videos: [],
                selectedVideo: null
            };
        },
        methods: {
            onTermChange(searchTerm) {
                axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: API_KEY,
                        type: 'video',
                        part: 'snippet',
                        q: searchTerm
                    }
                }).then(res => {
                    this.videos = res.data.items; 
                });
            },
            onVideoSelect(video) {
                console.log(video);
                this.selectedVideo = video;
            }
        }
    };
</script>

<style>

</style>      