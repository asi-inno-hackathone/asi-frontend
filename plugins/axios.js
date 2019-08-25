export default function ({$axios, app}) {
  $axios.defaults.baseURL = app.$env.API_URL;
}
