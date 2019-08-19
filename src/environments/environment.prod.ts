export const environment = {
  production: true
};

export let baseUrl = '';

(window.location.hostname === 'https://fantasy-forum.herokuapp.com/') ? baseUrl = 'https://mhpbbd-fantasy-server.herokuapp.com/' : baseUrl = 'http://localhost:3000/'