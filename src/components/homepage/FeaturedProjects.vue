<template>
  <div class="w-[595px] bg-gray2 px-10 py-6 flex flex-col gap-20 mt-[10px]">
    <p class="text-xl font-light opacity-50">{{ props.stack }}</p>
    <div class="flex flex-col gap-2">
      <p class="font-bold text-3xl">{{ props.projTitle }}</p>
      <div class="flex items-center gap-10 opacity-50 font-light">
        <a :href="props.liveLink" target="_blank" class="flex items-center gap-2">
          <p>See live</p>
          <img src="@/assets/img/link.svg" alt="" />
        </a>

        <!-- change this to routerLink -->
        <a :href="props.detailsLink" target="_blank" class="flex items-center gap-2"> 
          <p>View more details</p>
          <img src="@/assets/img/eye.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  stack: {
    type: String,
    required: true,
  },
  projTitle: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  detailsLink: {
    type: String,
    required: true,
  },
});

const path1 = "/src/assets/img/";
</script>
