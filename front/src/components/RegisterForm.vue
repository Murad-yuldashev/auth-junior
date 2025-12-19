<script setup lang="ts">

</script>

<template>
  <section class="register-form">
    <h2>Register - Junior Level</h2>

    <form>
<!--      Username Field  -->
      <div class="form-group">
        <label for="username">Username *</label>
        <input
            id="username"
            type="text"
            placeholder="Enter your username"
        >
      </div>

<!--      Login Field  -->
      <div class="form-group">
        <label for="login">Login *</label>
        <input
            id="login"
            type="text"
            placeholder="Enter your login"
        >
      </div>

      <!--      Password Field  -->
      <div class="form-group">
        <label for="password">Password *</label>
        <input
            id="password"
            type="password"
            placeholder="Enter your password"
        >
      </div>

      <!--     Confirm Password Field  -->
      <div class="form-group">
        <label for="password">Confirm Password *</label>
        <input
            id="password"
            type="password"
            placeholder="Confirm your password"
        >
      </div>

      <!--     PDF file Field  -->
      <div class="form-group">
        <label for="filePdf">Pdf file (optional) *</label>
        <input
            id="filePdf"
            type="file"
            placeholder="Confirm your password"
        >
      </div>

    </form>
  </section>
</template>

<style scoped>
.register-form {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
  border-radius: 4px;
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
  border-radius: 4px;
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