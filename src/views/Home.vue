<template>
  <HomeHeader />

  <body class="font-pop bg-portbg w-screen h-[400rem] text-white">
    <div class="w-[1200px] mx-auto">
      <HeroSection />

      <!-- Frameworks -->
      <div class="w-full h-20 bg-gray1 absolute left-0 flex items-center">
        <div class="w-[1200px] mx-auto flex items-center justify-around">
          <ScrollTools imageSrc="tailwind.png" imageLabel="tailwindcss" />
          <ScrollTools imageSrc="laravel.png" imageLabel="laravel" />
          <ScrollTools imageSrc="vue.png" imageLabel="Vue.js" />
        </div>
      </div>

      <!-- Featured Projects -->
      <div class="mt-20 mb-40">
        <div class="flex items-center justify-between pt-32">
          <h1 class="text-5xl font-bold">Featured Projects</h1>

          <div class="flex items-center gap-2">
            <img src="@/assets/img/arrow.svg" alt="" class="w-6" />
            <p class="text-main text-lg underline">See all projects</p>
          </div>
        </div>
        <div class="mt-20 flex flex-wrap justify-between">
          <FeaturedProjects
            stack="Laravel"
            projTitle="Paperless Clearance Management System"
            liveLink="github.com/bimmbin"
            detailsLink="facebook.com"
          />
          <FeaturedProjects
            stack="Laravel"
            projTitle="Automated Grading System"
            liveLink="github.com/bimmbin"
            detailsLink="facebook.com"
          />
          <FeaturedProjects
            stack="Vue.js/Laravel"
            projTitle="Personal Portfolio"
            liveLink="github.com/bimmbin"
            detailsLink="facebook.com"
          />
          <FeaturedProjects
            stack="Laravel"
            projTitle="Blog Website"
            liveLink="github.com/bimmbin"
            detailsLink="facebook.com"
          />
        </div>
      </div>

      <!-- scroll stacks -->
      <div class="w-full h-20 bg-gray1 absolute left-0 flex items-center">
        <div class="w-[1200px] mx-auto flex items-center justify-around">
          <ScrollStacks imageSrc="html.png" />
          <ScrollStacks imageSrc="css.png" />
          <ScrollStacks imageSrc="javascript.png" />
          <ScrollStacks imageSrc="php.png" />
        </div>
      </div>

      <!-- about section -->
      <div class="pt-40 text-center">
        <h1 class="font-bold text-5xl mb-10">About</h1>
        <div class="flex flex-col font-light text-[1.8rem] gap-7 leading-[2.7rem]">
          <p>
            Greetings! I'm Arvin Gomez, a passionate front-end web developer based in the
            vibrant city of Concepcion Tarlac. I take immense pride in announcing that I
            have recently completed my Bachelor of Science in Computer Science degree.
          </p>
          <p>
            Driven by my passion for website development, I immerse myself in the exciting
            world of coding while constantly seeking new avenues for growth and
            improvement.
          </p>
          <p>
            Vinrecs, my digital sanctuary, is an embodiment of my journey, combining the
            essence of my name with the concept of records, a reflection of my
            ever-evolving collection of remarkable projects.
          </p>
          <p>
            Join me on this incredible journey, and together, let's create exceptional web
            experiences that leave a lasting impact!
          </p>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import { ref } from "vue";
import HomeHeader from "../components/layouts/header.vue";
import HeroSection from "../components/homepage/HeroSection.vue";
import ScrollTools from "../components/homepage/ScrollTools.vue";
import FeaturedProjects from "../components/homepage/FeaturedProjects.vue";
import ScrollStacks from "../components/homepage/ScrollStacks.vue";
</script>
