<template>
  <div v-if="visible" class="overlay" @click.self="close">
    <div class="modal">
      <h3>{{ title }}</h3>
      <slot />
      <button class="close-btn" @click="close">Tancar</button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close'])
defineProps({
  visible: Boolean,
  title: String
})

function close() {
  emit('close')
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex; justify-content: center; align-items: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  min-width: 250px;
}
.close-btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
}
</style>
