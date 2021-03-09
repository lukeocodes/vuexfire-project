<template>
  <div class="about">
    <h1>This is a To-do page</h1>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo.message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('bindTodos')
  },

  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

