<template>
  <header class="navigation-bar w-nav">
    <div class="w-container">
      <nuxt-link to="/" class="brand-link w-nav-brand w--current">
        <h1 class="brand-text"><strong>U</strong>Start</h1>
      </nuxt-link>
      <nav role="navigation" class="navigation-menu w-nav-menu">
        <nuxt-link to="/" class="navigation-link w-nav-link w--current">ЛК</nuxt-link>
        <nuxt-link to="/contacts" class="navigation-link w-nav-link">Контакты</nuxt-link>
      </nav>
      <div class="hamburger-button w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>
