import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '../db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
    updateTodo: firestoreAction(( context , data) => {
      db.collection('todos')
        .doc(data.id)
        .update({ message: data.message })
        .then(() => {
          console.log('todo updated!')
        })
    }),
    bindTodos: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('todos', db.collection('todos'))
    }),
    unbindTodos: firestoreAction(({ unbindFirestoreRef }) => {
      unbindFirestoreRef('todos')
    }),
  },
  modules: {
  }
})
