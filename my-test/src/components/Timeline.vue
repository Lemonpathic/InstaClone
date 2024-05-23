<script setup>

import Container from "@/components/Container.vue";
import Card from "@/components/Card.vue";

const data = [
  {
    id: 1,
    username: "TreeGuy",
    img: "https://th.bing.com/th/id/OIP.mmQTDwys_dQinCk6YZXnlAHaGM?w=208&h=180&c=7&r=0&o=5&pid=1.7",
    caption: ""
  },
  {
    id: 2,
    username: "Zuck",
    img: "https://i.redd.it/6gfcf0e6l6061.jpg",
    caption: "Wife said that I look like this fish?"
  },
  {
    id: 3,
    username: "Me6 Lover",
    img: "https://images.saymedia-content.com/.image/t_share/MTc0NjQ2NjMyODQ1OTQ0MTg2/rick-sanchez-character-analysis-not-a-nihilist-but-a-cynic.jpg",
    caption: "Wubadubadubdub"
  },
  {
    id: 1,
    username: "TreeGuy",
    img: "https://th.bing.com/th/id/OIP.mmQTDwys_dQinCk6YZXnlAHaGM?w=208&h=180&c=7&r=0&o=5&pid=1.7",
    caption: ""
  },
  {
    id: 2,
    username: "Zuck",
    img: "https://i.redd.it/6gfcf0e6l6061.jpg",
    caption: "Wife said that I look like this fish?"
  },
  {
    id: 3,
    username: "Me6 Lover",
    img: "https://images.saymedia-content.com/.image/t_share/MTc0NjQ2NjMyODQ1OTQ0MTg2/rick-sanchez-character-analysis-not-a-nihilist-but-a-cynic.jpg",
    caption: "Listen, Morty, you think you’re so smart, huh? You’re just a little speck in the grand cosmic scheme of things. You know what your purpose is? To be my sidekick, Morty! That’s right, you’re the guy who fetches my portal gun, gets us into trouble, and then whines about it. And don’t even get me started on your love life. Jessica? Really? She’s like a cardboard cutout of a person, Morty. You’re better off with a Cronenberg monster. At least they have some depth. But no, you’ll keep chasing after her, like a dog chasing its tail. And you know what? I’ll still be here, burping and belching my way through the multiverse, because that’s what I do, Morty. I’m Rick freakin’ Sanchez, and you’re just along for the ride. So buckle up, Morty, because it’s gonna be a bumpy one. Wubba lubba dub dub! 🚀🌌"
  },
  {
    id: 69,
    username: "BenjiMonster",
    img: 'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-1/312146127_197896836135083_8654563378092208953_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bGjT--kxAGcQ7kNvgEW54Q3&_nc_ht=scontent-lga3-2.xx&oh=00_AYDHVpyK2IYWsUM89eyZr-7LRExJZmJIhJu5OgdJfk4rXA&oe=66544319',
    caption: 'Listen, Morty, you think you’re so smart, huh? You’re just a little speck in the grand cosmic scheme of things. You know what your purpose is? To be my sidekick, Morty! That’s right, you’re the guy who fetches my portal gun, gets us into trouble, and then whines about it. And don’t even get me started on your love life. Jessica? Really? She’s like a cardboard cutout of a person, Morty. You’re better off with a Cronenberg monster. At least they have some depth. But no, you’ll keep chasing after her, like a dog chasing its tail. And you know what? I’ll still be here, burping and belching my way through the multiverse, because that’s what I do, Morty. I’m Rick freakin’ Sanchez, and you’re just along for the ride. So buckle up, Morty, because it’s gonna be a bumpy one. Wubba lubba dub dub! 🚀🌌Listen, Morty, you think you’re so smart, huh? You’re just a little speck in the grand cosmic scheme of things. You know what your purpose is? To be my sidekick, Morty! That’s right, you’re the guy who fetches my portal gun, gets us into trouble, and then whines about it. And don’t even get me started on your love life. Jessica? Really? She’s like a cardboard cutout of a person, Morty. You’re better off with a Cronenberg monster. At least they have some depth. But no, you’ll keep chasing after her, like a dog chasing its tail. And you know what? I’ll still be here, burping and belching my way through the multiverse, because that’s what I do, Morty. I’m Rick freakin’ Sanchez, and you’re just along for the ride. So buckle up, Morty, because it’s gonna be a bumpy one. Wubba lubba dub dub! 🚀🌌Listen, Morty, you think you’re so smart, huh? You’re just a little speck in the grand cosmic scheme of things. You know what your purpose is? To be my sidekick, Morty! That’s right, you’re the guy who fetches my portal gun, gets us into trouble, and then whines about it. And don’t even get me started on your love life. Jessica? Really? She’s like a cardboard cutout of a person, Morty. You’re better off with a Cronenberg monster. At least they have some depth. But no, you’ll keep chasing after her, like a dog chasing its tail. And you know what? I’ll still be here, burping and belching my way through the multiverse, because that’s what I do, Morty. I’m Rick freakin’ Sanchez, and you’re just along for the ride. So buckle up, Morty, because it’s gonna be a bumpy one. Wubba lubba dub dub! 🚀🌌Listen, Morty, you think you’re so smart, huh? You’re just a little speck in the grand cosmic scheme of things. You know what your purpose is? To be my sidekick, Morty! That’s right, you’re the guy who fetches my portal gun, gets us into trouble, and then whines about it. And don’t even get me started on your love life. Jessica? Really? She’s like a cardboard cutout of a person, Morty. You’re better off with a Cronenberg monster. At least they have some depth. But no, you’ll keep chasing after her, like a dog chasing its tail. And you know what? I’ll still be here, burping and belching my way through the multiverse, because that’s what I do, Morty. I’m Rick freakin’ Sanchez, and you’re just along for the ride. So buckle up, Morty, because it’s gonna be a bumpy one. Wubba lubba dub dub! 🚀🌌'
  }
]
</script>

<template>
  <Container>
    <div class="timeline-container">
      <div style="margin-bottom: 80px"></div>

      <card v-for="card in data" :post="card" :key="card.id"></card>
    </div>
  </Container>
</template>

<style scoped>
.timeline-container {
  padding: 5px;
  background-color: white;
  border-right: 5px black solid;
  border-left: 5px black solid;
}
</style>