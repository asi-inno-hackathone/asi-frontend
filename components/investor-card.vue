<template>
  <div class="modal-overlay">
    <div class="newsheet w-container">
      <div @click="$emit('close')" class="close-modal">x</div>
      <div class="div-block-2 mew">
        <img
          src="https://uploads-ssl.webflow.com/5d615c33ad30d3635e3401c8/5d61609945d89375e9512529_jc7cwptt61bvrkhsww25.png"
          srcset="https://uploads-ssl.webflow.com/5d615c33ad30d3635e3401c8/5d61609945d89375e9512529_jc7cwptt61bvrkhsww25-p-500.png 500w, https://uploads-ssl.webflow.com/5d615c33ad30d3635e3401c8/5d61609945d89375e9512529_jc7cwptt61bvrkhsww25.png 512w"
          sizes="250px"
          alt=""
          class="grid-image believe"
        />
        <div class="div-block-6">
          <span class="text-span-4">Связаться</span>
        </div>
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
    name: 'InvestorCard',
  };
</script>

<style scoped>
  .newsheet {
    background: white;
    position: relative;
    box-shadow: none;
  }

  .close-modal {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    cursor: pointer;
    font-size: 1.5em;
  }

  .div-block-2 {
    border: none !important;
  }
</style>
