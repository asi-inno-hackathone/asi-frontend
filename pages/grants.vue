<template>
  <div class="section">
    <div class="div-block-7">Гранты</div>
    <GrantCard v-for="grant in grants" :key="grant.name" v-bind="grant" />
  </div>
</template>

<script>
  import GrantCard from "../components/grant-card";

  const grants = [
    {
      img: 'https://uploads-ssl.webflow.com/5d615c33ad30d3635e3401c8/5d61cc22a93ad98096cdc4e7_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202019-08-25%20%D0%B2%202.43.54-p-500.png',
      title: 'Фонд Бортника',
      link: 'http://fasie.ru/',
      idea: 'Фонд содействия развитию малых форм предприятий в научно-технической сфере (Фонд содействия инновациям) – государственная некоммерческая организация в форме федерального государственного бюджетного учреждения.',
      investment: 2,
      date: '19 сентября 2019',
      format: 'государственный фонд',
    },
  ];

  export default {
    components: {
      GrantCard,
    },
    head: {
      title: 'Гранты',
    },
    data() {
      return {
        grants,
      };
    },
    async asyncData({ $axios }) {
      const grants = await $axios.$get('/investment/getAll');
      return { grants };
    },
  };
</script>

<style scoped>
  .div-block-7 {
    text-align: center !important;
    font-weight: 300;
  }
</style>
