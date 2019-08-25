<template>
  <div :class="{'modal-open': modal}" class="section">
    <div class="div-block-7">Инвесторы</div>
    <div class="container-2 w-container">
      <h2 class="heading-2">Найдено 8 инвесторов</h2>
      <div class="w-dropdown">
        <div @click="toggleDropdown" :class="{'w--open': dropdown}" class="w-dropdown-toggle">
          <div class="w-icon-dropdown-toggle" />
          <div>Интересы</div>
        </div>
        <nav :class="{'w--open': dropdown}" class="w-dropdown-list">
          <button type="button" class="dropdown-link w-dropdown-link">Медицина</button>
          <button type="button" class="dropdown-link w-dropdown-link">Образование</button>
          <button type="button" class="dropdown-link w-dropdown-link">Блокчейн</button>
          <button type="button" class="dropdown-link w-dropdown-link">IT</button>
          <button type="button" class="dropdown-link w-dropdown-link">Сервисы</button>
          <button type="button" class="dropdown-link w-dropdown-link">Аналитика</button>
          <button type="button" class="dropdown-link w-dropdown-link">Робототехника</button>
          <button type="button" class="dropdown-link w-dropdown-link">3D моделирование</button>
          <button type="button" class="dropdown-link w-dropdown-link">Инженерия</button>
        </nav>
      </div>
    </div>
    <div class="container w-container">
      <div
        v-for="(investor, i) in investors"
        :id="i === 0 ? 'w-node-8a436f498659-323401d1' : ''"
        :key="investor.id"
        @click="openModal(investor.id)"
        class="white-box serv"
      >
        <img
          :src="'data:image/png;base64,' + investor.logo"
          sizes="(max-width: 479px) 15vw, (max-width: 767px) 60px, (max-width: 991px) 69px, 95.5px"
          alt=""
          class="grid-image"
        />
        <h3>{{ investor.name }}</h3>
        <h3 class="heading">до {{ investor.money }} ₽</h3>
        <p v-for="tag in investor.tags" :key="tag.id" class="paragraph">{{ tag.name }}</p>
      </div>
    </div>
    <InvestorCard @close="modal = null" v-bind="modal" />
  </div>
</template>

<script>
  import InvestorCard from "../components/investor-card";

  export default {
    components: {InvestorCard},
    head: {
      title: 'Инвесторы',
    },
    data() {
      return {
        dropdown: false,
        modal: null,
      };
    },
    async asyncData({ $axios }) {
      const investors = await $axios.$get('/investor/getAll');
      return { investors };
    },
    methods: {
      toggleDropdown() {
        this.dropdown = !this.dropdown;
      },
      async openModal(id) {
        this.modal = await this.$axios.$get('/investor/get/' + id);
      },
    },
  };
</script>

<style scoped>
  .div-block-7 {
    text-align: center !important;
    font-weight: 300;
  }

  .white-box {
    cursor: pointer;
    height: auto;
  }

  .w-dropdown-toggle.w--open .w-icon-dropdown-toggle {
    transform: rotate(180deg);
    transition: transform .2s;
  }

  .w-dropdown-link {
    width: 100%;
    background-color: transparent;
  }

  .w-dropdown-list {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2),
    0 4px 5px 0    rgba(0, 0, 0, .14),
    0 1px 10px 0   rgba(0, 0, 0, .12);
    border-radius: 10px;
    background-color: white;
  }
</style>
