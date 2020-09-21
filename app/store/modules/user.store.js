// Module state
import api        from '../../api/users';
import repository from './repository/repository';

let base = repository(api);

const state = {
    ...base.state,
    token: {},
};

// State properties - public
const getters = {
    ...base.getters,
    token: state => { return state.token },
};

// State actions - public
const actions = {
    ...base.actions,
};

// State mutations - private
const mutations = {
    ...base.mutations,
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
};

export default {
    namespaced: true,
    namespace: 'core',
    state,
    getters,
    actions,
    mutations
}

