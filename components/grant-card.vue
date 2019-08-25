<template>
  <div class="newsheet w-container">
    <div class="div-block-2 mew">
      <img
        :src="'data:image/png;base64,' + logo"
        sizes="250px"
        alt=""
        class="grid-image believe"
      />
      <div class="div-block-6">
        <a :href="link" target="_blank"><span>САЙТ</span></a>
      </div>
    </div>
    <div class="div-block-3 uu">
      <div class="text-block">{{ name }}</div>
      <div class="text-block-2"><strong class="bold-text-3">Идея: </strong><span class="text-span-2">{{ description }}</span></div>
      <div class="text-block-3"><strong class="bold-text-2">Размер инвестиции: </strong>{{ min_money || max_money || '1488' }}<span> рублей </span></div>
      <div class="text-block-3"><strong class="bold-text-2">Дата подачи заявки: </strong>{{ start_date }}</div>
      <div class="text-block-5"><strong class="bold-text">Формат: </strong>{{ type }}<span class="text-span">‍</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GrantCard',
    props: {
      logo: String,
      link: String,
      name: String,
      description: String,
      investment: Number,
      max_money: Number,
      min_money: Number,
      start_date: String,
      type: String,
    },
  };
</script>

<style scoped>
  .div-block-2 {
    border: none;
  }

  .div-block-6 a {
    color: white;
    text-decoration: none;
  }
</style>
