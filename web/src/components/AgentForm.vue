<template>
  <form @submit.prevent="submitForm">
    <div>
      <label>First Name:</label>
      <input v-model="firstName" required />
    </div>
    <div>
      <label>Last Name:</label>
      <input v-model="lastName" required />
    </div>
    <div>
      <label>Email:</label>
      <input v-model="email" type="email" required />
    </div>
    <div>
      <label>Mobile Number:</label>
      <input v-model="mobileNumber" type="text" />
    </div>
    <button type="submit">Upsert Agent</button>
  </form>
  <p v-if="message">{{ message }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const mobileNumber = ref("");
const message = ref("");

const submitForm = async () => {
  const res = await fetch("http://localhost:3000/api/agents", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      mobileNumber: mobileNumber.value,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    message.value = `Agent ${data.firstName} upserted successfully!`;
  } else {
    const err = await res.json();
    message.value = `Error: ${err.error || JSON.stringify(err)}`;
  }
};
</script>

<style scoped>
form > div { margin-bottom: 8px; }
</style>
