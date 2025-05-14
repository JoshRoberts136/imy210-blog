// Josh Roberts, u23536765
import axios from 'axios';
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      axios: axios
    }
  };
});