<script setup lang="ts">
import ImageList from "./components/ImageList.vue";
</script>

<template>
  <ImageList />
</template>

<style scoped>
.lazy-background {
  height: 300px;
  margin-bottom: 20px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease-in-out;
  opacity: 0; /* 로드 전 */
}

.lazy {
  transition: opacity 1s ease-in-out;
  opacity: 0; /* 로드 전 */
  max-width: 100%;
  max-height: 100%;
}

.loaded {
  opacity: 1; /* 로드 후 */
}
</style>
