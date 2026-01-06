import api from "../services/api.ts";
import type { User, LoginData, RegisterData } from "../types/auth.ts";
import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const token = ref<string | null>(localStorage.getItem('token'));
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);

//     Register function
    async function register(data: RegisterData) {
        loading.value = true;
        error.value = null;

        try {
        //     Create FormData for file upload
            const formData = new FormData();
            formData.append('username', data.username);
            formData.append('login', data.login);
            formData.append('password', data.password);

            if (data.filePdf) {
                formData.append('filePdf', data.filePdf);
            }

            if (data.fileImage) {
                formData.append('fileImage', data.fileImage);
            }

            const response = await api.post('/auth/register', formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            });

        //     Save token and user
            token.value = response.data.token;
            user.value = response.data.user;
            localStorage.setItem('junior-token', response.data.token);

            return response.data;

        } catch (err: any) {
            error.value = err.response?.data?.message || 'Registration failed';
            throw err;
        } finally {
            loading.value = false;
        }
    }

//     Login Function
    async function login(data: LoginData) {
        loading.value = true;
        error.value = null;

        try {
            const response = await api.post('/auth/login', data);

            token.value = response.data.token;
            user.value = response.data.user;
            localStorage.setItem('junior-token', response.data.token);

            return response.data;

        } catch (err: any) {
            error.value = err.response?.data?.message || 'Login failed';
            throw err;
        } finally {
            loading.value = false;
        }
    }

//     Logout function
    function logout() {
        user.value = null;
        token.value = null;
        localStorage.removeItem('junior-token')
    }

    return {
        user,
        token,
        loading,
        error,
        register,
        login,
        logout,
    }
})
