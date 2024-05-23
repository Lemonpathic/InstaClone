<template>
  <Container>
  <v-card>
    <v-layout>
      <v-navigation-drawer
          expand-on-hover
          rail
      >
        <v-list>
          <v-list-item
              prepend-avatar="https://th.bing.com/th/id/OIP.pb5W22s7Jn-YuJbRaHdzHAHaHa?rs=1&pid=ImgDetMain"
              subtitle="@jessica-fanboy"
              title="Morty Smith"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

    </v-layout>
  </v-card>
  </Container>
</template>
<script setup lang="ts">
import Container from "@/components/Container.vue";
</script>