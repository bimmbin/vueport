<template>
  <div class="w-[595px] h- bg-gray2  flex flex-col justify-between mt-[10px]">

    <div class="relative">
      <div class="w-[595px] h-[300px] absolute bg-black opacity-20"></div>
      <img :src="path1 + props.imageSrc" alt="" class="w-[595px] h-[300px] object-cover">
    </div>

    <div class="flex flex-col gap-2 px-10 py-10">
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
const path1 = "/src/assets/img/";
const props = defineProps({
  imageSrc: {
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
</script>
