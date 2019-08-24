<template>
  <div class="section">
    <div class="div-block-7">Инвесторы</div>
    <div class="container-2 w-container">
      <h2 class="heading-2">Найдено 8 инвесторов</h2>
      <div class="w-dropdown">
        <div class="w-dropdown-toggle">
          <div class="w-icon-dropdown-toggle" />
          <div>Dropdown</div>
        </div>
        <nav class="w-dropdown-list">
          <a href="#" class="dropdown-link w-dropdown-link">Медицина</a>
          <a href="#" class="dropdown-link-2 w-dropdown-link">Образование</a>
          <a href="#" class="dropdown-link-3 w-dropdown-link">Блокчейн</a>
          <a href="#" class="dropdown-link-4 w-dropdown-link">IT</a>
          <a href="#" class="w-dropdown-link">Сервисы</a>
          <a href="#" class="w-dropdown-link">Аналитика</a>
          <a href="#" class="dropdown-link-6 w-dropdown-link">Робототехника</a>
          <a href="#" class="dropdown-link-7 w-dropdown-link">3d моделировани</a>
          <a href="#" class="dropdown-link-5 w-dropdown-link">Инженерия</a>
        </nav>
      </div>
    </div>
    <div class="container w-container">
      <div
        v-for="i in 8"
        :id="i === 1 ? 'w-node-8a436f498659-323401d1' : ''"
        :key="i"
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
    <div class="newsheet w-container">
      <div class="div-block-2 mew">
        <img
          src="https://uploads-ssl.webflow.com/5d615c33ad30d3635e3401c8/5d61609945d89375e9512529_jc7cwptt61bvrkhsww25.png"
          srcset="https://uploads-ssl.webflow.com/5d615c33ad30d3635e3401c8/5d61609945d89375e9512529_jc7cwptt61bvrkhsww25-p-500.png 500w, https://uploads-ssl.webflow.com/5d615c33ad30d3635e3401c8/5d61609945d89375e9512529_jc7cwptt61bvrkhsww25.png 512w"
          sizes="250px"
          alt=""
          class="grid-image believe"
        />
        <div class="div-block-6"><span class="text-span-4">Связаться</span></div>
      </div>
      <div class="div-block-3 uu">
        <div class="text-block">Билл Гросс</div>
        <div class="text-block-2">
          <strong class="bold-text-3">Максимальная инвестиция:</strong>
          <span class="text-span-2"> 3 млн рублей</span>
        </div>
        <div class="text-block-3">
          <strong class="bold-text-2">Готов инвестировать сейчас:</strong>
          <span>до 1 млн рублей </span>
        </div>
        <div class="div-block-5">
          <div class="text-block-5">
            <strong class="bold-text-4">Интересы:</strong>
          </div>
          <p class="paragraph block mrr">Блокчейн</p>
          <p class="paragraph block mrr">Медицина</p>
          <p class="paragraph block mrr">Ютуб блоггеры</p>
        </div>
        <div class="text-block-5">
          <strong class="bold-text">Bio</strong>:
          <span class="text-span">
            Первый капитал на игре в блэкджек. MBA Калифорнийского университета в LA.
            Сооснователь Pimco. Миллиардер и единственный в мире обладатель полной коллекции
            почтовых марок США XIX века.
          </span>
        </div>
        <p class="paragraph analit">Аналитика</p>
        <div class="text-block-6">
          <span class="text-span-3">История инвестиций:<br />‍<br /></span>
          Citysearch, CarsDirect и другие
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Инвесторы',
    },
  };
</script>

<style scoped>
  .div-block-7 {
    text-align: center !important;
  }

  .div-block-2 {
    border: none !important;
  }

  .white-box {
    cursor: pointer;
  }
</style>
