<template>
  <div class="about">
    <h1>This is a To-do page</h1>
    <ul>
      <li v-for="(todo, index) in todos" :key="index" @click="updateTodo(todo.id)">{{ todo.message }}</li>
    </ul>
    <button type="button" @click="addTodo()">Add Todo</button>
  </div>
</template>

<script>
export default {
  destroy() {
    this.$store.dispatch("unbindTodos")
  },

  mounted() {
    this.$store.dispatch("bindTodos")
  },

  computed: {
    todos() {
      return this.$store.state.todos
    }
  },

  methods: {
    updateTodo(id) {
      this.$store.dispatch("updateTodo", { id: id, message: 'I GOT UPDATE, YO!'})
    },
    addTodo() {
      this.$store.dispatch("addTodo", { message: 'I GOT MADE, YO!'})
    }
  }
}
</script>

