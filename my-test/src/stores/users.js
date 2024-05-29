import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {supabase} from "@/supabase.js";

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
    const handleSignup = async (credentials, confirmPassword) => {
        const {email, password, username} = credentials
        if (password.length < 8) {
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
        if (password !== confirmPassword.value){
            return errorMessage.value = "Passwords do not match"
        }
        errorMessage.value = ""

        try {
            const response = await supabase
                .from("users")
                .select()
                .eq('username', username)
                .single()

            if (response.status === 406) {
                // User is available, continue with signup
            } else if (response.data) {
                // User with this username already exists
                return errorMessage.value = 'Username is taken'
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }


        // VALIDATE IF USER EXIST
        const {error} = await supabase.auth.signUp({
            email,
            password
        })

        if (error){
            return errorMessage.value = error.message
        }

        await supabase.from("users").insert({
            username,
            email
        })
    }
    const handleLogout = () => {

    }
    const getUser = () => {

    }

    return {user, errorMessage, handleLogout, handleSignup, handleLogin}
})
