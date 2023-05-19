<template>
  <main>
    <header>
      <p class="bold">Made with</p>
      <img :src="Vue" alt="vue" />
      <img :src="Typescript" alt="typescript" />
    </header>
    <article>
      <Input v-model="search" @update:model-value="(value) => searchSpotify(value)" />
      <div class="all-list" v-if="result">
        <List
          v-for="(item, index) in result"
          :key="index"
          :title="item.name"
          :release="item.release_date"
          :image="item.images[0].url"
          :total-tracks="item.total_tracks"
        />
      </div>
      <p v-else>Not found</p>
    </article>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Response } from '@/types/Response.ts';
import Input from './components/Input.vue';
import List from './components/List.vue';
import Vue from './assets/vue.png';
import Typescript from './assets/typescript.png';

const search = ref('');
let result = reactive([]) as Response[];
const searchSpotify = async (value: string) => {
  const { albums } = await fetch(`https://api.spotify.com/v1/search?q=${value}&type=album`, {
    headers: {
      Authorization:
        'Bearer BQD_s95v6KdDuiGtyW08_iuZIMCxdPY1MEgu-XEkC1kYn3IWUvhZEwll_z3RVxXKPTtt72HX2c2SN13xaweabLp7Agy12pWxuTRMxcTcRqkfwTkzlx2K',
    },
  }).then((res) => res.json());

  console.log(albums.items)
  result = albums.items;
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 24px;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    img {
      max-width: 5%;
    }
  }
  article {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    .all-list {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 40px;
    }
  }
  .bold {
    font-weight: bold;
  }
}
</style>
