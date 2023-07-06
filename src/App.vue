<script setup>
import { RouterLink, RouterView } from "vue-router";
import Layout from "@/components/layouts/Layout.vue";
import Header from "@/components/layouts/Header.vue";
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <Layout>
    <!-- header -->
    <Header/>

    <RouterView />
  </Layout>
</template>

<style>
body {
  overflow-x: hidden;
}
</style>