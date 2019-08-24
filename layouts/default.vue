<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
  import Header from "../components/default/header";
  import Footer from "../components/default/footer";

  export default {
    components: {Footer, Header},
  };
</script>
