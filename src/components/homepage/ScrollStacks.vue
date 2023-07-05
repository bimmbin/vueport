<template>
    <div class="flex items-center gap-2">
      <img :src="path1 + props.imageSrc" class="inline-block h-14" />
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    imageSrc: {
      type: String,
      required: true,
    },
  });
  
  const path1 = "/src/assets/img/";
  </script>
  