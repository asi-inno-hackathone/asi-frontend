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
        v-for="i in 8"
        :id="i === 1 ? 'w-node-8a436f498659-323401d1' : ''"
        :key="i"
        @click="openModal(i)"
        class="white-box serv"
      >
        <img
          src="https://uploads-ssl.webflow.com/5d615c33ad30d3635e3401c8/5d61609945d89375e9512529_jc7cwptt61bvrkhsww25.png"
          srcset="https://uploads-ssl.webflow.com/5d615c33ad30d3635e3401c8/5d61609945d89375e9512529_jc7cwptt61bvrkhsww25-p-500.png 500w, https://uploads-ssl.webflow.com/5d615c33ad30d3635e3401c8/5d61609945d89375e9512529_jc7cwptt61bvrkhsww25.png 512w"
          sizes="(max-width: 479px) 15vw, (max-width: 767px) 60px, (max-width: 991px) 69px, 95.5px"
          alt=""
          class="grid-image"
        />
        <h3>Билл Гросс</h3>
        <h3 class="heading">до 500 тыс ₽</h3>
        <p class="paragraph block">Блокчейн</p>
        <p class="paragraph servvs">Сервисы</p>
        <p class="paragraph anal">Аналитика</p>
      </div>
    </div>
    <InvestorCard @close="modal = null" />
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
    methods: {
      toggleDropdown() {
        this.dropdown = !this.dropdown;
      },
      openModal(id) {
        this.modal = id;
      },
    },
  };
</script>

<style scoped>
  .div-block-7 {
    text-align: center !important;
  }

  .white-box {
    cursor: pointer;
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
