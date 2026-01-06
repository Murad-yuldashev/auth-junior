<script setup lang="ts">
import {useAuthStore} from "../stores/auth.ts";
import type {RegisterData} from "../types/auth.ts";
import {useRouter} from "vue-router";
import {reactive, ref} from "vue";

const router = useRouter();
const authStore = useAuthStore();

//   Form data
const formData = reactive({
  username: "",
  login: '',
  password: "",
  confirmPassword: "",
});

const pdfFile = ref<File | undefined>();
const imageFile = ref<File | undefined>();

// Validation errors
const errors = reactive({
  username: "",
  login: '',
  password: "",
  confirmPassword: "",
  filePdf: '',
  fileImage: ''
});

// Simple validation function
function validateForm(): boolean {
//   Reset errors
  errors.username = '';
  errors.login = '';
  errors.password = '';
  errors.confirmPassword = '';
  errors.filePdf = '';
  errors.fileImage = '';

  let isValid = true;

  // Username validation
  if (formData.username.length < 3) {
    errors.username = 'Username must be at least 3 characters';
    isValid = false;
  }

  // Login validation
  if (formData.login.length < 3) {
    errors.login = 'Username must be at least 3 characters';
    isValid = false;
  }

  // Password validation
  if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
    isValid = false;
  }

  // Confirm Password validation
  if (formData.confirmPassword.length < 6) {
    errors.confirmPassword = "Password must be at least 6 characters";
    isValid = false;
  }

  // File size validation
  if (pdfFile.value && pdfFile.value.size > 5 * 1024 * 1024) {
    errors.filePdf = 'PDF file must be less than 5MB';
    isValid = false;
  }

  if (imageFile.value && imageFile.value.size > 5 * 1024 * 1024) {
    errors.fileImage = 'Image must be less than 5MB';
    isValid = false;
  }

  return isValid;
}

// Handle PDF file change
function handlePdfChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    pdfFile.value = target.files[0];
  }
}

// Handle Image file change
function handleImageChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    imageFile.value = target.files[0];
  }
}

// Handle form submission
async function handleSubmit() {
  if (!validateForm()) {
    return;
  }

  const data: RegisterData = {
    ...formData,
    filePdf: pdfFile.value!,
    fileImage: imageFile.value!
  };

  try {
    await authStore.register(data);
    await router.push('/dashboard');
    console.log('Form submitted', data);
  } catch (error) {
    console.error('Register error:', error);
  }
}

</script>

<template>
  <section class="register-form">
    <h2>Register - Junior Level</h2>

    <form @submit.prevent="handleSubmit">
      <!--      Username Field  -->
      <div class="form-group">
        <label for="username">Username *</label>
        <input
            id="username"
            v-model="formData.username"
            minlength="3"
            type="text"
            required
            placeholder="Enter your username"
        >
      </div>

      <!--      Login Field  -->
      <div class="form-group">
        <label for="login">Login *</label>
        <input
            id="login"
            v-model="formData.login"
            minlength="3"
            required
            type="text"
            placeholder="Enter your login"
        >
      </div>

      <!--      Password Field  -->
      <div class="form-group">
        <label for="password">Password *</label>
        <input
            id="password"
            v-model="formData.password"
            minlength="6"
            required
            type="password"
            placeholder="Enter your password"
        >
      </div>

      <!--     Confirm Password Field  -->
      <div class="form-group">
        <label for="confirmPassword">Confirm Password *</label>
        <input
            id="confirmPassword"
            v-model="formData.confirmPassword"
            required
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
            accept=".pdf"
            @change="handlePdfChange"
        >
      </div>

      <!--     Image file Field  -->
      <div class="form-group">
        <label for="fileImage">Image file (optional) *</label>
        <input
            id="fileImage"
            type="file"
            accept="image/*"
            @change="handleImageChange"
        >
      </div>

      <button type="submit" :disabled="authStore.loading">
        {{ authStore.loading ? 'Registering...' : 'Register' }}
      </button>

<!--      Error Message-->
      <div v-if="authStore.error" class="error-message">
        {{ authStore.error }}
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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