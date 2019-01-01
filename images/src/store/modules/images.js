import api from '../../api/imgur';

import { router } from '../../main';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    //all complicated business logic goes here
    async fetchImages({
        rootState,
        commit
    }) {
        const {
            token
        } = rootState.auth;
        const response = await api.fetchImages(token);

        commit('setImages', response.data.data);
    },

    //rootState access the root of the vuex store
    async uploadImages({ rootState }, images) {
        //get access token
        const { token } = rootState.auth;

        //call our API module to do the upload
        await api.uploadImages(images, token);

        //Redirect our user to IMageList component
        router.push('/');

    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}