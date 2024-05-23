<script setup>
import {computed, ref} from "vue";

const {post} = defineProps(['post'])

const shortCaption = computed(() => post.caption.length > 120 ? post.caption.slice(0,120) : post.caption)

</script>
<template>
  <div class="flex flex-col flex-wrap gap-5 ma-5">
    <VaCard class="post">
      <VaCardBlock
          class="flex-nowrap"
          horizontal
      >

        <v-dialog max-width="700">
          <template v-slot:activator="{ props: activatorProps }">
            <div class="flex-auto">
              <VaCardTitle>{{'@'+post.username}}</VaCardTitle>
              <VaCardContent>
                {{ shortCaption }}
                <v-btn
                    v-if="post.caption.length > 120"
                    variant="text"
                    size="compact"
                    color="blue"
                    v-bind="activatorProps"
                >...See More</v-btn>

              </VaCardContent>

            </div>

            <img
                v-bind="activatorProps"
                :src="post.img"
                class="post-image"
             alt="yu"/>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <div class="post-title">
                <h1>@{{ post.username }}</h1>
              </div>
              <div class="ma-3"></div>
          <v-img
              :src="post.img"
          />
              <h1 class="caption" v-if="post.caption">{{post.caption}}</h1>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    text="Close Image"
                    @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </VaCardBlock>
    </VaCard>


  </div>
</template>
<style scoped>
.caption{
  margin-top: 15px;
  padding: 10px;
}
.post-title{
  width: 100%;
  position: fixed;
  z-index: 999;
  margin-bottom: 15px;
  background-color: white;
}
.post-title h1{
  font-weight: bold;
  padding: 3px;
}
.post-image{
  width: 100px !important;
  height: 100px !important;
  object-fit: cover;
}
.post{
  padding: 15px;

}
</style>


