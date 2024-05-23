<script setup>
import {RouterLink, useRouter} from "vue-router";
import Container from "@/components/Container.vue";
import {ref} from "vue";
import AuthModal from "@/components/AuthModal.vue";

const router = useRouter()

const searchUsername = ref("")
const isAuthenticated = ref(false)
const onSearch = () => {
  if (searchUsername.value) {
    router.push(`/profile/${searchUsername.value}`)
    searchUsername.value = ""
  }
}
</script>
<template>
  <Container>
    <header>
      <div class="nav-wrapper">
        <VaNavbar
            class="nav-menu"
        >
          <template #left>
            <VaNavbarItem>
              <v-btn
                  width="180"
                  to="/"
                  variant="text"
                  :active="false"
                  height="50">
                <div style="position: relative"><strong>InstaClone</strong></div>
              </v-btn>
            </VaNavbarItem>
          </template>
          <template #center>
            <v-text-field
                prepend-inner-icon="mdi-magnify"
                density="compact"
                label="Search Profile..."
                variant="solo"
                hide-details
                single-line
                width="250"
                v-model="searchUsername"
                @keyup.enter="onSearch"
            ></v-text-field>
          </template>
          <template #right
                    v-if="!isAuthenticated">
            <AuthModal :is-login="false"></AuthModal>
            <AuthModal :is-login="true"></AuthModal>
          </template>
          <template #right
                    v-if="isAuthenticated">
            <v-btn type="primary" class="nav-auth-button">Profile</v-btn>
            <v-btn type="primary" class="nav-auth-button">Logout</v-btn>
          </template>
        </VaNavbar>
      </div>
    </header>
  </Container>
</template>


<style scoped>
.login-buttons {
  margin-right: 15px;
}

.nav-menu {
  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  padding: 0;
  border-right: 5px black solid;
  border-left: 5px black solid;
  width: 100%;


}

.nav-wrapper {
  position: fixed;
  width: 820px;
  z-index: 999;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script setup lang="ts">
</script>