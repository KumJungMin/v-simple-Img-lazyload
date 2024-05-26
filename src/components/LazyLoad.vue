<template>
  <div
    v-if="props.type === 'background'"
    v-lazy-load:background="{
      src: props.src,
      loadedClass: 'loaded',
    }"
    class="lazy-background"
  >
    <slot></slot>
  </div>
  <div v-else class="lazy-container">
    <img
      :alt="props.alt"
      v-lazy-load="{
        src: props.src,
        loadedClass: 'loaded',
      }"
      class="lazy"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt?: string;
  type?: string;
}>();
</script>

<style scoped>
.lazy-background {
  width: 300px;
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

.lazy-container {
  width: 300px;
  height: 300px;
  background-color: #f0f0f0;
}
.lazy {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  opacity: 0; /* 로드 전 */
}
.loaded {
  opacity: 1; /* 로드 후 */
}
</style>
