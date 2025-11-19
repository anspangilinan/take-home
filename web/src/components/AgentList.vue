<template>
  <div>
    <h2>All Agents</h2>
    <button @click="fetchAgents">Refresh</button>
    <ul>
      <li v-for="agent in agents" :key="agent.id">
        {{ agent.firstName }} {{ agent.lastName }} - {{ agent.email }}
        <button @click="deleteAgent(agent.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const agents = ref<Array<any>>([]);

const fetchAgents = async () => {
  const res = await fetch("http://localhost:3000/api/agents");
  const data = await res.json();
  console.log({res})
  agents.value = data;
};

const deleteAgent = async (id: string) => {
  await fetch(`http://localhost:3000/api/agents/${id}`, { method: "DELETE" });
  fetchAgents();
};

// fetch agents initially
fetchAgents();
</script>
