<script setup lang="ts">

</script>

<template>
  <section class="register-form">
    <h2>Login page</h2>

    <form>
      <!--  Login -->
      <div class="form-group">
        <label for="login">Login *</label>
        <input
            id="login"
            placeholder="Login"
            type="text"
        >
      </div>

      <!--   Password  -->
      <div class="form-group">
        <label for="password">Password *</label>
        <input
            id="password"
            placeholder="Password"
            type="password"
        >
      </div>
      
      <router-link to="/register" class="link-register">Go to Register</router-link>
      
      <button type="submit">Login</button>
    </form>
  </section>
</template>

<style scoped>
.register-form {
  max-width: 600px;
  margin: 120px auto;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.link-register {
  margin-bottom: 6px;
  display: inline-block;
  color: #004eff;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 16px;
  font-size: 16px;
}

input:focus {
  outline: none;
  border-color: #4CAF50;
}

.error {
  color: #f44336;
  font-size: 12px;
  margin-top: 5px;
  display: block;
}

button {
  width: 100%;
  padding: 12px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #45a049;
}

button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.error-message {
  margin-top: 15px;
  padding: 10px;
  background: #ffebee;
  color: #c62828;
  border-radius: 4px;
  text-align: center;
}
</style>