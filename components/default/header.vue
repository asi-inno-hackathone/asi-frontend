<template>
  <header data-collapse="medium" class="navigation-bar w-nav">
    <div class="w-container">
      <nuxt-link to="/" class="brand-link w-nav-brand w--current">
        <h1 class="brand-text"><strong>U</strong>Start</h1>
      </nuxt-link>
      <nav role="navigation" class="navigation-menu w-nav-menu">
        <nuxt-link to="/signup" class="navigation-link w-nav-link w--current">Войти</nuxt-link>
        <nuxt-link to="/contacts" class="navigation-link w-nav-link">Контакты</nuxt-link>
      </nav>
      <div @click="toggleOpened" class="hamburger-button w-nav-button">
        <div class="w-icon-nav-menu" />
      </div>
    </div>
    <div
      :style="{ display: opened ? 'block' : 'none', height: '1000px' }"
      class="w-nav-overlay"
    >
      <nav
        role="navigation"
        class="navigation-menu w-nav-menu w--nav-menu-open"
      >
        <nuxt-link to="/signup" class="navigation-link w-nav-link w--nav-link-open" style="">Войти</nuxt-link>
        <nuxt-link to="/contacts" class="navigation-link w-nav-link w--nav-link-open">Контакты</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        opened: false,
      };
    },
    methods: {
      toggleOpened() {
        console.log('clicked');
        this.opened = !this.opened;
      },
    },
  };
</script>
