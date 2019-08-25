<template>
  <div class="section">
    <div class="w-container">
      <div class="section-title-group">
        <h2 class="section-heading centered">Вход</h2>
      </div>
      <div class="form-wrapper w-form">
        <form
          @submit.prevent="submit"
          class="form"
          name="wf-form-Email-Form"
        >
          <label class="field-label" for="email">Электронный адрес</label>
          <input
            id="email"
            v-model="email"
            class="form-field w-input"
            maxlength="256"
            name="Name"
            placeholder="Ваш email"
            required
            type="email"
          />
          <label class="field-label" for="password">Пароль</label>
          <input
            id="password"
            v-model="password"
            class="form-field w-input"
            maxlength="256"
            name="password"
            placeholder="********"
            required
            type="password"
          />
          <input
            class="button full-width w-button"
            data-wait="Please wait..."
            type="submit"
            value="Войти"
          />
        </form>

        <div class="w-form-done">
          <p>Thank you! Your submission has been received!</p>
        </div>
        <div class="w-form-fail">
          <p>Oops! Something went wrong while submitting the form :(</p>
        </div>
      </div>

      <p>
        Еще не зарегистрированы?
        <nuxt-link to="/signup">Создать аккаунт</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Log In',
    },
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async submit() {
        console.log(this.email, this.password);
        // const req = await this.$axios.post('/auth/login');
        // const data = await this.$axios.$get('/startup/getAll');
        // console.log('req', req);
        // console.log('data', data);
      },
    },
  };
</script>
