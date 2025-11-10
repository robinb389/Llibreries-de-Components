<template>
  <nav class="my-navbar">
    <h3>{{ title }}</h3>
    <div class="right">
      <slot />
    </div>
  </nav>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style scoped>
.my-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
}
</style>
