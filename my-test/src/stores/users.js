import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {supabase} from "@/supabase.js";
import {tr} from "vuetify/locale";


export const useUserStore = defineStore('users', () => {
    const user = ref(null)
    const errorMessage = ref("")
    const loading = ref(false)


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async (credentials) => {
        const {email, password} = credentials

        if (!password.length) {
            loading.value = false
            return errorMessage.value = "Password cannot be empty"
        }
        loading.value = true

        const response = await supabase.auth.signInWithPassword({
            email,
            password
        });

        const {error} = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            loading.value = false
            return errorMessage.value = error.message
        }
        console.log(response)

        const {data: existingUser} = await supabase
            .from("users")
            .select()
            .eq('email', email)
            .single()

        user.value = {
            email: existingUser.email,
            username: existingUser.username,
            id: existingUser.id
        }

        loading.value = false
        errorMessage.value = ""
    }
    const handleSignup = async (credentials, confirmPassword) => {
        const {email, password, username, f_name, l_name} = credentials
        if (password !== confirmPassword.value) {
            return errorMessage.value = "Passwords do not match"
        }
        errorMessage.value = ""
        loading.value = true

        const {data: userNameExists} = await supabase
            .from("users")
            .select()
            .eq('username', username)
            .single()

        if (userNameExists) {
            loading.value = false
            return errorMessage.value = 'Username is taken'
        }


        // VALIDATE IF USER EXIST
        const {error} = await supabase.auth.signUp({
            email,
            password
        })

        if (error) {
            loading.value = false
            return errorMessage.value = error.message
        }

        await supabase.from("users").insert({
            username,
            email,
            f_name,
            l_name
        })

        const {data: newUser} = await supabase
            .from("users")
            .select()
            .eq('email', email)
            .single()


        user.value = {
            id: newUser.id,
            email: newUser.email,
            username: newUser.username,
            f_name: newUser.f_name,
            l_name: newUser.l_name
        }
        console.log(newUser)
        loading.value = false
    }
    const handleLogout = () => {

    }
    const getUser = async () => {
        loading.value = true
        const response = await supabase.auth.getUser()

        const {data: userWithEmail} = await supabase
            .from("users")
            .select()
            .eq("email", response.data.user.email)
            .single()
        user.value = {
            username: userWithEmail.username,
            email: userWithEmail.email,
            f_name: userWithEmail.f_name,
            l_name: userWithEmail.l_name,
            id: userWithEmail.id

        }
        loading.value = false
    }

    const clearError = () => {
        errorMessage.value = ''
    }

    return {
        errorMessage,
        user,
        handleLogout,
        handleSignup,
        handleLogin,
        getUser,
        clearError,
        loading,

    }
})
