/*
|-----------------------------------------------------------------------------------------------
| Entity management actions
|-----------------------------------------------------------------------------------------------
|
| CRUD based Actions created for managing single entity
|
*/
export default function (api) {

   return {

       /**
        * Create single entity
        *
        * @param commit
        * @param data
        */
       createSingle: ({ commit }, data) => {
           api.item.create((data) => {
               commit('SET_SINGLE', data);
           }, data);
       },

       /**
        * Get single entity
        *
        * @param commit
        * @param id
        */
       readSingle: ({ commit }, id) => {
           api.item.read((data) => {
               commit('SET_SINGLE', data);
           }, id);
       },

       /**
        * Update single entity
        *
        * @param commit
        * @param id
        * @param data
        */
       updateSingle: ({ commit }, { id, data }) => {
           api.item.update((data) => {
               commit('SET_SINGLE', data);
           }, { id, data });
       },

       /**
        * Delete single entity
        *
        * @param commit
        * @param id
        */
       deleteSingle: ({ commit, state }) => {
           api.item.delete(() => {
               commit('SET_SINGLE', {});
           }, state.item.id);
       },
   }
}

