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
  padding: 10px;
  border-radius: 6px;
  color: white;
  margin: 8px 0;
}

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
