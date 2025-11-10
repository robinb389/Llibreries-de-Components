<template>
  <span class="my-badge" :style="{ backgroundColor: color }">
    {{ text }}
  </span>
</template>

<script setup>
defineProps({
  text: String,
  color: {
    type: String,
    default: "gray"
  }
})
</script>

<style scoped>
.my-badge {
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
}
</style>
