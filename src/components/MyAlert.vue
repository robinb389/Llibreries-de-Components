<template>
  <div class="my-alert" :class="type">
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "info"
  },
  message: String
})
</script>

<style scoped>
.my-alert {
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
}

/* Type-specific colors */
.info {
  background-color: #2196f3;
}

.success {
  background-color: #4caf50;
}

.error {
  background-color: #f44336;
}
</style>
