const axios = require('axios');
const url = 'https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json';


module.exports = {
  podcasts: {
    getAll: (cb => {
      axios.get(url, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          cb(null, response.data.podcasts);
        })
        .catch((err) => {
          cb(err);
        });
    })
  }
}
