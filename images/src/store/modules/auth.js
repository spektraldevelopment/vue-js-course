import api from '../../api/imgur';

const state = {
    token: null
};

const getters = {
    isLoggedIn: (state) => !!state.token
};

const actions = {
    login: () => {
        api.login();
    },
    //commit is used to call the mutations
    //we pack in as much functionality in actions
    logout: ({ commit }) => {
        commit('setToken', null);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}