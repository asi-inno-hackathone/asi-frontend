<template>
  <header class="flex py-2 px-8 justify-between items-center">
    <div class="logo">UStart</div>
    <div class="actions">
      <span>А ты готов?</span>
      <nuxt-link to="/signin" class="ml-4 border border-gray-200 py-2 px-4 bg-white text-gray-800 rounded hover:bg-gray-500">
        Войти
      </nuxt-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>
