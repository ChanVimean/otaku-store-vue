<script setup>
import { onMounted } from 'vue';
import Navigation from './components/Navigation.vue';
import { themeStore } from './store/themeStore';

onMounted(() => themeStore.applyTheme());
</script>

<template>
  <nav>
    <Navigation />
  </nav>

  <main>
    <router-view />
  </main>

  <footer>
  </footer>
</template>

<style scoped></style>
