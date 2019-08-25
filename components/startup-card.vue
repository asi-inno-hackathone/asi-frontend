<template>
  <div class="modal-overlay">
    <div class="newsheet w-container">
      <div @click="$emit('close')" class="close-modal">x</div>
      <div class="div-block-2 mew">
        <img
          src="https://uploads-ssl.webflow.com/5d615c33ad30d3635e3401c8/5d61c1215bf4d83eb723fadc_KMO_120232_18665_1_t218_123704.jpg"
          alt=""
          class="grid-image believe"
        />
        <div class="div-block-6">
          <span class="text-span-4">Связаться</span>
        </div>
      </div>
      <div class="div-block-3 uu">
        <div class="text-block">NeuraLink</div>
        <div class="text-block-2"><strong class="bold-text-3">Идея:</strong><span class="text-span-2"> Нейротехнологическая компания, основанная Илоном Маском, планирующая заниматься разработкой и производством имплантируемых нейрокомпьютерных интерфейсов.</span> </div>
        <div class="text-block-3"><strong class="bold-text-2">Сумма для запуска:</strong> <span>10 млн рублей </span></div>
        <div class="div-block-5">
          <div class="text-block-5"><strong class="bold-text-4">Интересы:</strong></div>
          <p class="paragraph block mrr">Киберпанк</p>
          <p class="paragraph block mrr">Медицина</p>
          <p class="paragraph block mrr">IT</p>
        </div>
        <div class="text-block-5"><strong class="bold-text">Bio</strong>: <span class="text-span">Оконичил <em class="italic-text">University of Pennsylvani</em>.Успешно запустил PayPal, работает над SpaceX.</span></div>
        <div class="text-block-6"><span class="text-span-3">Бизнес-план:<br />‍<br /></span>тут типо прикреплённая pdf</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StartupCard',
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
