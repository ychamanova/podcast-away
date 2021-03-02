const routes = require('./API');

module.exports = {
  podcasts: {
    getPodcasts: (req, res) => {
      routes.podcasts.getAll((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    }
  }
}