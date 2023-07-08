<template>
  <!-- Featured Projects -->
  <div class="pb-20">
    <h1 class="text-[11rem] font-bold text-right  translate-y-24 translate-x-10 opacity-10 leading-[14rem]">Projects</h1>

    <div class="pb-20 flex flex-wrap justify-between relative z-1">
      <Project
        imageSrc="clearance.png"
        projTitle="Paperless Clearance Management System"
        liveLink="github.com/bimmbin"
        detailsLink="facebook.com"
      />
      <Project
        imageSrc="grading.png"
        projTitle="Automated Grading System"
        liveLink="github.com/bimmbin"
        detailsLink="facebook.com"
      />
      <Project
        imageSrc="blog.png"
        projTitle="Personal Portfolio"
        liveLink="github.com/bimmbin"
        detailsLink="facebook.com"
      />
      <Project
        imageSrc="grading.png"
        projTitle="Blog Website"
        liveLink="github.com/bimmbin"
        detailsLink="facebook.com"
      />
    </div>
  </div>
</template>

<script setup>
import Project from "@/components/projects/Project.vue";
</script>
