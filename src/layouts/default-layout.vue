<template>
  <q-layout view="hHh lpR fFf">
    <header-component />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import HeaderComponent from "~/components/HeaderComponent.vue";
</script>
