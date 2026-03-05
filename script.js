const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.render('index')
});

app.get('/contact', function(req, res) {
  res.render('contact')
});

// app.get('/profile', function(req, res) {
//   res.send('Hello from my profile')
// });

// app.get('/profile/:username', function(req, res) {
//   res.send(`Hello ${req.params.username} from my profile`)
// });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})