<template>
  <div class="modal-overlay">
    <div class="newsheet w-container">
      <div @click="$emit('close')" class="close-modal">x</div>
      <div class="div-block-2 mew">
        <img
          :src="'data:image/png;base64,' + investor.avatar"
          sizes="250px"
          alt=""
          class="grid-image believe"
        />
        <div class="div-block-6">
          <span class="text-span-4">Связаться</span>
        </div>
      </div>
      <div class="div-block-3 uu">
        <div class="text-block">{{ investor.name }}</div>
        <div class="text-block-2">
          <strong class="bold-text-3">Максимальная инвестиция:</strong>
          <span class="text-span-2"> {{ investor.maximal_historical_investment }} ₽</span>
        </div>
        <div class="text-block-3">
          <strong class="bold-text-2">Готов инвестировать сейчас:</strong>
          <span>до {{ investor.max_investment }} ₽</span>
        </div>
        <div class="div-block-5">
          <div class="text-block-5">
            <strong class="bold-text-4">Интересы: </strong>
          </div>
          <p class="paragraph mrr">{{ tags.name }}</p>
        </div>
        <div class="text-block-5">
          <strong class="bold-text">Bio</strong>:
          <span class="text-span">
            {{ investor.bio }}
          </span>
        </div>
        <div class="text-block-6">
          <span class="text-span-3">История инвестиций: </span>
          Citysearch, CarsDirect и другие
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InvestorCard',
    props: {
      investor: {
        type: Object,
        default: () => ({
          avatar: '',
          bio: '',
          max_investment: null,
          maximal_historical_investment: null,
          link: '',
          name: '',
        }),
      },
      tags: {
        type: Object,
        default: () => ({
          name: '',
        }),
      },
    },
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
