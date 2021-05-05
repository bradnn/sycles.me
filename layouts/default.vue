<template>
  <div id="root">
    <div class="bar">
      <div class="my-name">sycles</div>
      <div class="pages">
        <router-link to="/" class-active="current">about me</router-link>
        <router-link to="/what" class-active="current">what I'm doing</router-link>
        <router-link to="/tech" class-active="current">technologies</router-link>
        <router-link to="/contact" class-active="current">contact</router-link>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Karla',
    sans-serif;
  font-size: 16px;
}
</style>
