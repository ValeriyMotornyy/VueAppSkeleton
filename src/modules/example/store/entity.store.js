import api        from '../api/entity.js';
import repository from '../../../store/modules/repository/repository';

let base = repository(api);

const state = {
    ...base.state,
};

const getters = {
    ...base.getters,
};

const actions = {
    ...base.actions,
};

const mutations = {
    ...base.mutations,
};

export default {
    namespaced: true,
    namespace: 'example',
    state,
    getters,
    actions,
    mutations
};