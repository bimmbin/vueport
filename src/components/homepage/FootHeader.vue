<template>
      <p class="text-3xl font-semibold mb-3">
            <slot></slot>
      </p>
    </template>
    
    <script setup>
    const props = defineProps({
      listname: {
        type: String,
        required: true,
      },
      isLink: {
        type: Boolean,
      },
      footLink: {
        type: String,
      },
    });
    
    const path1 = "/src/assets/img/";
    </script>
    