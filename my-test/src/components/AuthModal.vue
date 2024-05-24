<script setup>
import { ref, shallowRef } from 'vue';
const props = defineProps(['isLogin']);
import {useUserStore} from "@/stores/users.js";

const userStore = useUserStore()
const {} = userStore
console.log(props);
const dialog = shallowRef(false);

const rules = {
  required: value => !!value
}
</script>

<template>
  <v-dialog v-if="isLogin" v-model="dialog" width="400px">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn text="Log In" v-bind="activatorProps" class="nav-auth-button"></v-btn>
    </template>

    <v-card prepend-icon="mdi-account" title="User Profile">
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-text-field label="Username" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Password" type="password"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
        <v-btn color="primary" text="Log In" variant="tonal" @click="dialog = false"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialog" max-width="600" v-if="isLogin === false">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn text="Sign Up" v-bind="activatorProps" class="nav-auth-button"></v-btn>
    </template>

    <v-card prepend-icon="mdi-account" title="User Profile">
      <v-card-text>
        <v-row dense>
          <v-col cols="12" sm="6">
            <v-text-field label="First name*" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Last name*" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Email*" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Password*" type="password" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Confirm Password*" type="password" required></v-text-field>
          </v-col>
        </v-row>

        <small class="text-caption text-medium-emphasis">*indicates required field</small>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
        <v-btn color="primary" text="Create Account" variant="tonal" @click="dialog = false"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
