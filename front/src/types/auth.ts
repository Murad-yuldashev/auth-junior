export interface User {
    id: string;
    login: string;
    username: string;
}

export interface RegisterData {
    username: string;
    login: string;
    password: string;
    confirmPassword: string;
    filePdf: File;
    fileImage: File;
}

export interface LoginData {
    login: string;
    password: string;
}

