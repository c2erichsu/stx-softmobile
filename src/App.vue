<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="root__container">
    <nav class="nav">
      <div>挑戰</div>
    </nav>
    <RouterView class="RouterView" />
  </div>
</template>

<style>
.root__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.nav {
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  height: 50px;
  background-color: lightgrey;
  z-index: 1;
}

.RouterView {
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
  z-index: 0;
}
</style>
