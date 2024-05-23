<script setup>
const props = defineProps(['userName','userInfo'])
</script>

<template>
<h1 class="text-capitalize">{{ props.userName }}</h1>
  <v-container class="user-stats">
    <v-row no-gutters>
      <v-col>
        <h1>{{props.userInfo.posts}} Posts</h1>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <h1>{{props.userInfo.followers}} Followers</h1>
      </v-col>
      <v-spacer></v-spacer>

      <v-col>
        <h1>{{props.userInfo.following}} Following</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>