// npm install and require the axios module
const axios = require('axios');
// call axios.get and use the omdb api to download information 
// about all of the Lord of the Rings movies.
axios 
.get('http://omdbapi.com/?s=Die%20hard')
//.then(unwarpResponse)
//.then(unwrapData)
.then(logData)
//.catch(console.error)


//const unwarpResponse = (resonse) => response.data;
//const unwrapData = (data) => data.search;
const logData = (data) => console.log(data.search);


