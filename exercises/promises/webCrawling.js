'use strict';
const axios = require('axios');

function getURLs(str) {
  let regHref = /(?<=href=")[^"]+/g;
  return str.match(regHref);
}

function findPiranhaURL(data) {
  return Promise.all(
    getURLs(data)
      .filter(url => !url.startsWith('mailto:'))
      .map(url => {
        if (!url.startsWith('http') ) {
          url = `http://marijnhaverbeke.nl/${url}`;
        }
        return axios.get(url)
          .then(res => {
           /* console.log(`${url},  ${res.data.includes('Piranha')}`);*/
            return {url: url, found: res.data.includes('Piranha')}
          })
          .catch(error => {
           throw error;
          })
      })
  );
}

axios.get('http://marijnhaverbeke.nl')
  .then(res => findPiranhaURL(res.data))
  .then(data => {
    data
      .filter(d => d.found)
      .forEach(d => console.log(d.url))
  })
  .catch(error => {
    console.log(error.message)
  });