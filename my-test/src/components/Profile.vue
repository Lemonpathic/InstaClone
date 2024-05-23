<script setup>

import Container from "@/components/Container.vue";
import Card from "@/components/Card.vue";
import UserBar from "@/components/UserBar.vue";
import ImageGallery from "@/components/ImageGallery.vue";

const photos = [
  {
    lazySrc: "https://picsum.photos/10/6?image=55",
    src: "https://picsum.photos/500/300?image=55"
  },
  {
    lazySrc: "https://picsum.photos/10/6?image=85",
    src: "https://picsum.photos/500/300?image=85"
  },
  {
    lazySrc: "https://picsum.photos/10/6?image=155",
    src: "https://picsum.photos/500/300?image=155"
  },
  {
    lazySrc: "https://picsum.photos/10/6?image=255",
    src: "https://picsum.photos/500/300?image=255"
  },
  {
    lazySrc: "https://picsum.photos/10/6?image=555",
    src: "https://picsum.photos/500/300?image=555"
  },

]
</script>

<template>
  <Container>
    <div class="profile-container">
      <div style="margin-bottom: 80px"></div>

      <UserBar userName="RickySanchy"
               :userInfo="{
        posts: 3,
        followers:2934,
        following:554
               }"></UserBar>
<ImageGallery :photos="photos"></ImageGallery>
    </div>

  </Container>
</template>

<style scoped>
.profile-container {
  padding: 5px;
  background-color: white;
  border-right: 5px black solid;
  border-left: 5px black solid;
}
</style>