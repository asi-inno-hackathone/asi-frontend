<template>
  <div class="section">
    <div class="w-container">
      <div class="section-title-group">
        <h2 class="section-heading centered">Регистрация</h2>
      </div>
      <div class="form-wrapper w-form">
        <form
          class="form"
          name="wf-form-Email-Form"
        >
          <label class="field-label" for="email">Электронный адрес</label>
          <input
            id="email"
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
            class="form-field w-input"
            maxlength="256"
            name="password"
            placeholder="********"
            required
            type="password"
          />
          <label class="field-label" for="password-confirm">Подтвердите пароль</label>
          <input
            id="password-confirm"
            class="form-field w-input"
            maxlength="256"
            name="password-2"
            placeholder="********"
            required
            type="password"
          />
          <div class="div-block">
            <div
              :class="{active: active === 1}"
              @click="active === 1 ? active = null : active = 1"
              class="div-block-2"
            >
              <div>Я – <br />предприниматель</div>
            </div>
            <div
              :class="{active: active === 2}"
              @click="active === 2 ? active = null : active = 2"
              class="div-block-2"
            >
              <div>Я – <br />стартапер</div>
            </div>
            <div
              :class="{active: active === 3}"
              @click="active === 3 ? active = null : active = 3"
              class="div-block-2"
            >
              <div>Я – <br />инвестор</div>
            </div>
          </div>
          <input
            class="button full-width w-button"
            data-wait="Please wait..."
            type="submit"
            value="Создать"
          />
        </form>

        <div class="w-form-done">
          <p>Thank you! Your submission has been received!</p>
        </div>
        <div class="w-form-fail">
          <p>Oops! Something went wrong while submitting the form :(</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import bcrypt from 'bcryptjs';

  export default {
    head: {
      title: 'Sign up for UStart',
    },
    data() {
      return {
        active: null,
      };
    },
    mounted() {
      // bcrypt.hash('password', 12, (err, hash) => {
      //   console.log(hash);
      // });
    },
  };
</script>

<style scoped>
  .div-block .div-block-2:hover {
    background-color: #CCC;
    cursor: pointer;
  }

  .div-block .active {
    background-color: #69b9ff;
    color: white;
  }

  .div-block .active:hover {
    background-color: #69b9ff;
  }
</style>
