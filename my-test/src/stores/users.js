import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useUserStore = defineStore('users', () => {
    const user = ref(null)
    const errorMessage = ref("")

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = () => {

    }
    const handleSignup = (credentials) => {
        const {email, password, username} = credentials
        if (password.length < 12) {
            return errorMessage.value = "Password Length too short"
        }

        if (username.length > 15) {
            return errorMessage.value = "Username is too long"
        }
        if (username.length < 4) {
            return errorMessage.value = "Username is too short"
        }
        if (!validateEmail(email)) {
            return errorMessage.value = "Email is invalid"
        }
    }
    const handleLogout = () => {

    }
    const getUser = () => {

    }

    return {user, errorMessage, handleLogout, handleSignup, handleLogin}
})