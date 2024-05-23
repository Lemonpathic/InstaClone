<script setup>
import {ref} from "vue";
const {photos} = defineProps(['photos'])
console.log(photos)

</script>

<template>
  <v-row>
    <v-col
        v-for="photo in photos"
        class="d-flex child-flex"
        cols="3"
    >
      <v-img
          :lazy-src="photo.lazySrc"
          :src="photo.src"
          aspect-ratio="1"
          class="bg-grey-lighten-2"
          cover
      >
        <template v-slot:placeholder>
          <v-row
              align="center"
              class="fill-height ma-0"
              justify="center"
          >
            <v-progress-circular
                color="grey-lighten-5"
                indeterminate
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>