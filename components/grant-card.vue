<template>
  <div class="newsheet w-container">
    <div class="div-block-2 mew">
      <img
        :src="img"
        sizes="250px"
        alt=""
        class="grid-image believe"
      />
      <div class="div-block-6">
        <a :href="link" target="_blank"><span>САЙТ</span></a>
      </div>
    </div>
    <div class="div-block-3 uu">
      <div class="text-block">{{ title }}</div>
      <div class="text-block-2"><strong class="bold-text-3">Идея: </strong><span class="text-span-2">{{ idea }}</span></div>
      <div class="text-block-3"><strong class="bold-text-2">Размер инвестиции: </strong>{{ investment }}<span> млн рублей </span></div>
      <div class="text-block-3"><strong class="bold-text-2">Дата подачи заявки: </strong>{{ date }}</div>
      <div class="text-block-5"><strong class="bold-text">Формат: </strong>{{ format }}<span class="text-span">‍</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GrantCard',
    props: {
      img: String,
      link: String,
      title: String,
      idea: String,
      investment: Number,
      date: String,
      format: String,
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
