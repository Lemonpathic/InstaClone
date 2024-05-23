<script setup>
import Nav from "@/components/Nav.vue";
import {RouterView} from "vue-router";
import Timeline from "@/components/Timeline.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <main>
    <Nav></Nav>
    <RouterView></RouterView>
    <sidebar></sidebar>
  </main>
</template>

<style scoped>


</style>
