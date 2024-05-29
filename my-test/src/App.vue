<script setup>
import Nav from "@/components/Nav.vue";
import {RouterView} from "vue-router";
import Timeline from "@/components/Timeline.vue";
import Sidebar from "@/components/Sidebar.vue";
import {onMounted} from "vue";
import {useUserStore} from "@/stores/users.js";

const userStore = useUserStore()
onMounted(() => {
  userStore.getUser()
})
</script>

<template>
  <main>
    {{userStore.user}}
    <Nav></Nav>

    <RouterView></RouterView>
    <sidebar></sidebar>
  </main>
</template>

<style scoped>


</style>
