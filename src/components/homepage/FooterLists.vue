<template>
  <div class="flex items-center gap-2 opacity-50 font-extralight text-lg mt-1">
    <p v-if="props.isLink" class="underline">
      <a :href="props.footLink" target="_blank">
        {{ props.listname }}
      </a>
    </p>
    <p v-else>{{ props.listname }}</p>
  </div>
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
