<template>
  <div>
    <Banner />
  </div>
</template>

<script>
  import Banner from "../components/home/banner";

  export default {
    components: {
      Banner,
    },
    head: {
      title: 'Home',
      meta: [{ hid: 'description', name: 'description', content: 'Home page' }],
    },
  };
</script>
