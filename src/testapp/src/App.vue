<template>
  <div id="app">

    <!-- Navbar -->
    <MyNavbar title="UI Library Demo">
      <MyBadge text="Login" color="#1976d2"/>
    </MyNavbar>

    <main class="container">

      <!-- Section: Badges -->
      <section class="section">
        <h2>Badges</h2>
        <p>Mostra etiquetes amb diferents colors:</p>
        <div class="badge-container">
          <MyBadge text="New" color="#4caf50"/>
          <MyBadge text="Hot" color="#f44336"/>
          <MyBadge text="Info" color="#607d8b"/>
          <MyBadge text="Sale" color="#ff9800"/>
        </div>
      </section>

      <!-- Section: Alerts -->
      <section class="section">
        <h2>Alerts</h2>
        <p>Missatges d’alerta segons el tipus:</p>
        <div class="alert-container">
          <MyAlert type="info" message="This is an info alert"/>
          <MyAlert type="success" message="Success! Everything worked"/>
          <MyAlert type="error" message="Error! Something went wrong"/>
        </div>
      </section>

      <!-- Section: Modal -->
      <section class="section">
        <h2>Modal</h2>
        <p>Pots obrir un modal fent clic al botó:</p>
        <button class="primary-btn" @click="showModal = true">Open Modal</button>

        <MyModal :visible="showModal" title="Example Modal" @close="showModal=false">
          <p>This is modal content inside the library component.</p>
          <div class="modal-footer">
            <button class="danger-btn" @click="showModal=false">Close</button>
            <MyBadge text="Modal Badge" color="#9c27b0"/>
          </div>
        </MyModal>
      </section>

      <!-- Section: Card Example -->
      <section class="section">
        <h2>Card Example</h2>
        <MyCard title="Card Title">
          <p>This is a card content with a badge and an alert inside.</p>
          <MyBadge text="Card Badge" color="#009688"/>
          <MyAlert type="success" message="Card Alert!"/>
          <button class="primary-btn card-btn">Action</button>
        </MyCard>
      </section>

    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const showModal = ref(false)
</script>

<style scoped>
/* Global container */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f5f5f5;
  min-height: 100vh;
}

/* Section styling */
.section {
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

/* Section headings */
h2 {
  margin-bottom: 12px;
  color: #35495e;
}

/* Badge container */
.badge-container {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 10px;
}

/* Alert container */
.alert-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
}

/* Buttons */
.primary-btn {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}
.primary-btn:hover {
  background-color: #369f6e;
}

.danger-btn {
  padding: 8px 16px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.3s;
}
.danger-btn:hover {
  background-color: #d32f2f;
}

/* Card action button */
.card-btn {
  margin-top: 12px;
}

/* Modal footer */
.modal-footer {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 15px;
}

/* Alerts styling (works with MyAlert scoped classes) */
.my-alert {
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 0.95rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  color: white;
}

.my-alert.info {
  background-color: #2196f3;
}
.my-alert.success {
  background-color: #4caf50;
}
.my-alert.error {
  background-color: #f44336;
}
</style>
