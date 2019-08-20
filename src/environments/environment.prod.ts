export const environment = {
  production: true
};

export let baseUrl = '';

switch (window.location.hostname) {
  case 'localhost' || '127.0.0.1':
      baseUrl = 'http://localhost:3000';
      break;
  case 'https://fantasy-forum.herokuapp.com/' : 
      baseUrl = 'https://mhpbbd-fantasy-server.herokuapp.com/';
      break;
}