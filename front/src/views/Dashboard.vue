<script setup lang="ts">
import {useAuthStore} from "../stores/auth.ts";
import {useRouter} from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout();
  router.push("/login");
};
</script>

<template>
  <section class="dashboard">
    <h1>Welcome {{ authStore?.user?.username }}</h1>
    <p>You have successfully registered and logged in.</p>
    <button @click="handleLogout">Logout</button>
  </section>
</template>

<style scoped>
.dashboard {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #d32f2f;
}
</style>