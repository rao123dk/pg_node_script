const axios = require('axios'),
  db = require('./models');

// order of names is important for insert due to relations  
const tables = ["users", "posts", "comments", "albums", "photos", "todos"];

(async () => {
  for await (const table of tables) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/" + table);
    console.log(response.data.length);
    db[table].bulkCreate(response.data)
      .then(data => {
        console.log("created", table, data.length);
      })
      .catch(err => {
        console.log(err);
      })
  }
})();

