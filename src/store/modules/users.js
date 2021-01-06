const axios = require('axios');

const state = {
    users: [],
    currentUser:[]
};

const getters = {
    getUsers: (state) => state.users,
    getCurrentUser: (state) => state.currentUser
};

const actions = {
    async fetchUsers({commit}) {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const response = await axios.get(url);
        commit('setUsers', response.data);
    }
};

const mutations = {
    setUsers: (state, users) => state.users = users,
    setCurrentUser: (state, user) => state.currentUser = user
};

export default {
    state,
    getters,
    actions,
    mutations
}

