<template>
  <div class="flex items-center gap-2">
    <img :src="path1 + props.imageSrc" class="inline-block w-12 h-12" />
    <span class="text-white text-xl font-light"> {{ props.imageLabel }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  imageLabel: {
    type: String,
    required: true,
  },
});

const path1 = "/src/assets/img/";
</script>
