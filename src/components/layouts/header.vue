<template>
   <div class="flex justify-between items-center h-20">
      <img src="@/assets/img/logo.png" alt="" class="h-8" />
      <nav>
        <ul class="flex gap-10">
          <router-link :to="{ name: 'home' }">Home</router-link>
          <router-link :to="{ name: 'projects' }">Projects</router-link>

          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div class="">
        <p class="border border-main py-1.5 px-5 rounded-full">Login</p>
      </div>
    </div>
</template>

<script setup>

</script>
