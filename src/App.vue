<script setup lang="ts">
import { useMainStore } from "~/stores/main";

const mainStore = useMainStore();

mainStore.fetchBikeSpots();
mainStore.fetchCarSpots();
document.title = import.meta.env.VITE_APP_TITLE;
</script>

<template>
  <router-view />
</template>
