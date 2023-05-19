<template>
  <div class="list">
    <h2>{{ title }}</h2>
    <div class="info">
      <p>Release date {{ release }}</p>
      <p>•</p>
      <p>Total tracks {{ totalTracks }}</p>
    </div>
    <img :src="image" :alt="image" />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  image: String,
  release: String,
  totalTracks: Number,
});
</script>
<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
}
</style>
