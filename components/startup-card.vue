<template>
  <div class="modal-overlay">
    <div class="newsheet w-container">
      <div @click="$emit('close')" class="close-modal">x</div>
      <div class="div-block-2 mew">
        <img
          :src="'data:image/png;base64,' + logo"
          alt=""
          class="grid-image believe"
        />
        <div class="div-block-6">
          <span class="text-span-4">Связаться</span>
        </div>
      </div>
      <div class="div-block-3 uu">
        <div class="text-block">{{ name }}</div>
        <div class="text-block-2"><strong class="bold-text-3">Идея: </strong><span class="text-span-2">{{ description }}</span></div>
        <div class="text-block-3"><strong class="bold-text-2">Сумма для запуска:</strong> <span>{{ money_requirement }} рублей</span></div>
        <div class="div-block-5">
          <div class="text-block-5"><strong class="bold-text-4">Интересы:</strong></div>
          <p class="paragraph block mrr">Киберпанк</p>
          <p class="paragraph block mrr">Медицина</p>
          <p class="paragraph block mrr">IT</p>
        </div>
        <div class="text-block-5"><strong class="bold-text">Bio</strong>: <span class="text-span">{{ bio }}</span></div>
        <div class="text-block-6"><span class="text-span-3">Бизнес-план: </span><a :href="file" target="_blank">PDF-файл</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StartupCard',
    props: {
      name: {
        type: String,
        default: '',
      },
      description: {
        type: String,
        default: '',
      },
      logo: {
        type: String,
        default: '',
      },
      bio: {
        type: String,
        default: '',
      },
      file: {
        type: String,
        default: '',
      },
      money_requirement: {
        type: Number,
        default: null,
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
