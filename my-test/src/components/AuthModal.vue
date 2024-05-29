<script setup>
import {reactive, ref, shallowRef} from 'vue';

const props = defineProps(['isLogin']);
import {useUserStore} from "@/stores/users.js";
import {storeToRefs} from "pinia";

const userStore = useUserStore()
const {errorMessage, loading, user} = storeToRefs(userStore)
const dialog = shallowRef(false);
const showOver = ref(true)

const userCredentials = reactive({
  f_name: "",
  l_name: "",
  email: "",
  age: "",
  username: "",
  password: ""
})

const confirmPassword = ref('')

const handleOkay = async (i) => {
  console.log(props.isLogin)
  if (!props.isLogin){
  await userStore.handleSignup(userCredentials, confirmPassword)
  if (user.value) {
    closeDialog()

  }}
  else {
    await userStore.handleLogin({
      password: userCredentials.password,
      email: userCredentials.email
    })
    if (!errorMessage.value){
      closeDialog()
    }
  }


}

const passwordRules = {
  required: value => !!value,
  length16: value => value.length > 8 || 'Password must be greater than 8 Characters',
  matches: value => value === userCredentials.password || 'Passwords must match'
}

const closeDialog = () => {
  console.log('closing')
  dialog.value = false
  for (let key in userCredentials) {
    userCredentials[key] = ""
  }
  confirmPassword.value = ""
  userStore.clearError()
}

const handleDialogUpdate = (value) => {
  if (!value) {
    closeDialog();
  }
};
</script>

<template>
  <v-overlay

      :model-value="loading"
      class="align-center justify-center"
  >
    <v-progress-circular
        color="primary"
        size="64"
        indeterminate
    ></v-progress-circular>
  </v-overlay>
  <!--  LOG IN MODAL-->
  <v-dialog v-if="isLogin" v-model="dialog" width="400px">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn text="Log In" v-bind="activatorProps" class="nav-auth-button"></v-btn>
    </template>

    <v-card prepend-icon="mdi-account" title="User Profile">
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-text-field label="Email" required v-model="userCredentials.email"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Password" type="password" v-model="userCredentials.password"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <div>
        <small class="text-red" v-if="errorMessage">ERROR:{{ errorMessage }}</small>
      </div>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="Close" variant="plain" @click="closeDialog"></v-btn>
        <v-btn color="primary" text="Log In" variant="tonal" @click="handleOkay"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>


  <!--SIGN UP MODAL-->

  <v-dialog @update:modelValue="handleDialogUpdate" v-model="dialog" max-width="600" v-if="isLogin === false">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn text="Sign Up" v-bind="activatorProps" class="nav-auth-button"></v-btn>
    </template>

    <v-card prepend-icon="mdi-account" title="User Profile">

      <div class="input-container">
        <v-card-text v-if="!loading">
          <v-text-field label="Username*" required v-model="userCredentials.username"></v-text-field>

          <v-row dense>
            <v-col cols="12" sm="6">
              <v-text-field label="First name*" required v-model="userCredentials.f_name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Last name*" required v-model="userCredentials.l_name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required
                        v-model="userCredentials.age"></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Email*" required v-model="userCredentials.email"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                  label="Password*"
                  type="password"
                  :rules="[passwordRules.required, passwordRules.length16]"
                  required
                  v-model="userCredentials.password"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                  label="Confirm Password*"
                  type="password"
                  :rules="[passwordRules.matches]"
                  required
                  v-model="confirmPassword"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="ma-3"></div>
          <small class="text-caption text-medium-emphasis">*indicates required field</small>
          <div>
            <small class="text-red" v-if="errorMessage">ERROR:{{ errorMessage }}</small>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions v-if="!loading">
          <v-spacer></v-spacer>
          <v-btn text="Close" variant="plain" @click="closeDialog"></v-btn>
          <v-btn color="primary" text="Create Account" variant="tonal" @click="handleOkay"></v-btn>
        </v-card-actions>
      </div>
    </v-card>




  </v-dialog>
</template>

<style scoped>
.input-container {
  min-height: 200px;
  max-height: 700px;
}

</style>
